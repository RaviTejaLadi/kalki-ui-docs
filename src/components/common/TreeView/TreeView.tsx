import { cn } from '@/utils';
import React, { useState, useEffect, forwardRef } from 'react';

// Define type for tree node
interface TreeNodeType {
  name: string;
  children?: TreeNodeType[];
  checked?: boolean;
}

interface TreeNodeProps {
  node: TreeNodeType;
  parentChecked?: boolean;
  showCheckBox?: boolean;
  onCheckChange: (node: TreeNodeType, isChecked: boolean) => void;
  className?: string;
  style?: React.CSSProperties;
}

const TreeNode = forwardRef<HTMLDivElement, TreeNodeProps>(
  (
    {
      node,
      parentChecked,
      showCheckBox,
      onCheckChange,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const [collapsed, setCollapsed] = useState(false);
    const [checked, setChecked] = useState<boolean>(
      parentChecked !== undefined ? parentChecked : false
    );

    useEffect(() => {
      if (parentChecked !== undefined) {
        setChecked(parentChecked);
      }
    }, [parentChecked]);

    useEffect(() => {
      onCheckChange(node, checked);
    }, [checked]);

    const handleToggle = () => {
      setCollapsed(!collapsed);
    };

    const handleCheck = () => {
      setChecked(!checked);
    };

    return (
      <div
        ref={ref}
        className={cn('text-sm', className)}
        style={style}
        {...rest}
      >
        <div className="flex">
          {showCheckBox && (
            <input
              type="checkbox"
              id={node.name}
              name={node.name}
              checked={checked}
              onChange={handleCheck}
              disabled={parentChecked === false}
              className="mr-2 cursor-pointer"
            />
          )}
          <label htmlFor={node.name} className="flex items-center space-x-2">
            {node.children && (
              <button
                onClick={handleToggle}
                className="text-xs px-2 py-1 border rounded bg-gray-200 hover:bg-gray-300 focus:outline-none"
              >
                {collapsed ? '🔺' : '🔻'}
              </button>
            )}
            <span>{node.name}</span>
          </label>
        </div>
        {!collapsed && node.children && (
          <div className="ml-6 mt-1">
            {node.children.map((child, index) => (
              <TreeNode
                key={index}
                node={child}
                parentChecked={checked}
                onCheckChange={onCheckChange}
                showCheckBox={showCheckBox}
                className="mt-1"
              />
            ))}
          </div>
        )}
      </div>
    );
  }
);

TreeNode.displayName = 'TreeNode';

interface TreeViewProps {
  data: TreeNodeType;
  showCheckBox?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const TreeView = forwardRef<HTMLDivElement, TreeViewProps>(
  ({ data, showCheckBox, className, style, ...rest }, ref) => {
    const [checkedNodes, setCheckedNodes] = useState<TreeNodeType>(
      JSON.parse(JSON.stringify(data))
    );

    const handleCheckChange = (node: TreeNodeType, isChecked: boolean) => {
      const updateCheckedStatus = (nodeToUpdate: TreeNodeType) => {
        if (nodeToUpdate.name === node.name) {
          nodeToUpdate.checked = isChecked;
        }
        if (nodeToUpdate.children) {
          nodeToUpdate.children.forEach(updateCheckedStatus);
        }
      };
      updateCheckedStatus(checkedNodes);
      setCheckedNodes({ ...checkedNodes });
    };

    const filterCheckedNodes = (node: TreeNodeType): TreeNodeType | null => {
      if (node.checked) {
        return {
          ...node,
          children: node.children
            ? node.children.map(filterCheckedNodes).filter((n) => n !== null)
            : undefined,
        };
      }
      return null;
    };

    const checkedHierarchy = filterCheckedNodes(checkedNodes);

    return (
      <div ref={ref} className={cn(className)} style={style} {...rest}>
        <TreeNode
          node={data}
          showCheckBox={showCheckBox}
          onCheckChange={handleCheckChange}
          parentChecked={undefined}
        />
        {showCheckBox && (
          <pre className="mt-4 p-2 bg-gray-100 rounded border text-xs">
            <code>{JSON.stringify(checkedHierarchy, null, 2)}</code>
          </pre>
        )}
      </div>
    );
  }
);

TreeView.displayName = 'TreeView';

export default TreeView;
