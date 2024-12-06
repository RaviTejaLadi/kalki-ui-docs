import React, { useRef, useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Button, Form, Table } from "react-ui-essentials";
import { Delete, LeftArrow, RightArrow, DownArrow, UpArrow, Ellipsis } from "./icons";
import { useEditableTable } from "./useEditableTable";
import styles from "./EditableTable.module.css";

const ColumnControl = ({ onDeleteColumn, onAddColumnRight, onAddColumnLeft }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Box style={{position:"relative"}} ref={menuRef}>
      <Button size="sm" variant="light" onClick={() => setIsOpen(!isOpen)}>
        <Button.Icon>
          <Ellipsis width="15px" height="15px" />
        </Button.Icon>
      </Button>
      {isOpen && (
        <Box className={styles.controlMenu}>
          <Button size="sm" variant="light" className={styles.controlButton} onClick={onDeleteColumn}>
            <Delete width="15px" height="15px" style={{ marginRight: "5px" }} />
            Delete
          </Button>
          <Button size="sm" variant="light" className={styles.controlButton} onClick={onAddColumnRight}>
            <RightArrow width="15px" height="15px" style={{ marginRight: "5px" }} />
            Insert Right
          </Button>
          <Button size="sm" variant="light" className={styles.controlButton} onClick={onAddColumnLeft}>
            <LeftArrow width="15px" height="15px" style={{ marginRight: "5px" }} />
            Insert Left
          </Button>
        </Box>
      )}
    </Box>
  );
};

ColumnControl.propTypes = {
  onDeleteColumn: PropTypes.func.isRequired,
  onAddColumnRight: PropTypes.func.isRequired,
  onAddColumnLeft: PropTypes.func.isRequired,
};

const EditableTable = React.forwardRef(({ initialHeaders, initialRows, onSubmit }, ref) => {
  const { tableData, isEditing, activeControls, actions } = useEditableTable(initialHeaders, initialRows);

  const inputRefs = useRef([]);
  const headerInputRefs = useRef([]);

  const handleSubmit = useCallback(() => {
    onSubmit(tableData);
    actions.toggleEditMode();
  }, [onSubmit, tableData, actions]);

  const handleCellChange = useCallback(
    (rowIndex, columnIndex, newValue) => {
      actions.updateCell(rowIndex, columnIndex, newValue);
      // Maintain focus after updating
      setTimeout(() => {
        inputRefs.current[rowIndex]?.[columnIndex]?.focus();
      }, 0);
    },
    [actions]
  );

  const handleHeaderChange = useCallback(
    (index, newValue) => {
      actions.updateHeader(index, newValue);
      // Maintain focus after updating
      setTimeout(() => {
        headerInputRefs.current[index]?.focus();
      }, 0);
    },
    [actions]
  );

  const renderCell = useCallback(
    (value, rowIndex, columnIndex) =>
      isEditing ? (
        <Form.Input
          className={styles.cellInput}
          type="text"
          value={value}
          onChange={(e) => handleCellChange(rowIndex, columnIndex, e.target.value)}
          ref={(el) => {
            if (el) {
              if (!inputRefs.current[rowIndex]) {
                inputRefs.current[rowIndex] = [];
              }
              inputRefs.current[rowIndex][columnIndex] = el;
            }
          }}
        />
      ) : (
        value
      ),
    [isEditing, handleCellChange]
  );

  const renderHeaderCell = useCallback(
    (header, index) => (
      <Box className={styles.headerCell}>
        {isEditing ? (
          <Form.Input
            className={styles.headerInput}
            type="text"
            value={header}
            onChange={(e) => handleHeaderChange(index, e.target.value)}
            ref={(el) => {
              headerInputRefs.current[index] = el;
            }}
          />
        ) : (
          header
        )}
        {isEditing && (
          <ColumnControl
            onDeleteColumn={() => actions.deleteColumn(index)}
            onAddColumnRight={() => actions.addColumn(index + 1)}
            onAddColumnLeft={() => actions.addColumn(index)}
          />
        )}
      </Box>
    ),
    [isEditing, handleHeaderChange, actions]
  );

  return (
    <Box ref={ref} margin="10px">
      <Box margin="2px" padding="3px" rounded style={{ display: "flex", justifyContent: "space-between" }}>
        <Button size="sm" variant="light" onClick={actions.toggleEditMode}>
          <Button.Text>{isEditing ? "Save" : "Edit"}</Button.Text>
        </Button>
        {isEditing ? (
          <Button size="sm" variant="light" onClick={actions.resetTable}>
            <Button.Text>Cancel</Button.Text>
          </Button>
        ) : (
          <Button size="sm" variant="light" onClick={handleSubmit}>
            <Button.Text>Submit</Button.Text>
          </Button>
        )}
      </Box>
      <Box width="calc(100% - 5px)" height="100%" margin="5px 2px" padding="2px" rounded style={{ overflow: "auto" }}>
        <Table>
          <Table.Head>
            <Table.Row>
              {tableData.headers.map((header, index) => (
                <Table.Cell key={`${header}-${index}`} isHeader>
                  {renderHeaderCell(header, index)}
                </Table.Cell>
              ))}
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {tableData.rows.map((row, rowIndex) => (
              <Table.Row key={`row-${rowIndex}`}>
                {row.map((data, columnIndex) => (
                  <Table.Cell key={`${data}-${columnIndex}`}>{renderCell(data, rowIndex, columnIndex)}</Table.Cell>
                ))}
                {isEditing && (
                  <Table.Cell>
                    <ColumnControl
                      onDeleteColumn={() => actions.deleteRow(rowIndex)}
                      onAddColumnRight={() => actions.addRow(rowIndex + 1)}
                      onAddColumnLeft={() => actions.addRow(rowIndex)}
                    />
                    {/* <Box>
                      <Button size="sm" variant="light" onClick={() => actions.setActiveControlsRow(rowIndex)}>
                        <Button.Icon>
                          <Ellipsis width="15px" height="15px" />
                        </Button.Icon>
                      </Button>
                      {activeControls.row === rowIndex && (
                        <ControlMenu
                          controls={[
                            { label: "Delete", icon: Delete, onClick: () => actions.deleteRow(rowIndex) },
                            { label: "Insert Below", icon: DownArrow, onClick: () => actions.addRow(rowIndex + 1) },
                            { label: "Insert Above", icon: UpArrow, onClick: () => actions.addRow(rowIndex) },
                          ]}
                        />
                      )}
                    </Box> */}
                  </Table.Cell>
                )}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Box>
    </Box>
  );
});

EditableTable.propTypes = {
  initialHeaders: PropTypes.arrayOf(PropTypes.string).isRequired,
  initialRows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

EditableTable.displayName = "EditableTable";

export default EditableTable;
