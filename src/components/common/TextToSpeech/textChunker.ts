import React from "react";

export function getTextFromNode(node: React.ReactNode): string {
    if (typeof node === 'string') {
      return node;
    }
    if (typeof node === 'number') {
      return node.toString();
    }
    if (Array.isArray(node)) {
      return node.map(getTextFromNode).join(' ');
    }
    if (React.isValidElement(node)) {
      return getTextFromNode(node.props.children);
    }
    return '';
  }
  
  export function splitTextIntoChunks(text: string, maxLength: number = 200): string[] {
    const words = text.split(' ');
    const chunks: string[] = [];
    let currentChunk = '';
  
    for (const word of words) {
      if ((currentChunk + ' ' + word).length <= maxLength) {
        currentChunk += (currentChunk ? ' ' : '') + word;
      } else {
        chunks.push(currentChunk);
        currentChunk = word;
      }
    }
  
    if (currentChunk) {
      chunks.push(currentChunk);
    }
  
    return chunks;
  }