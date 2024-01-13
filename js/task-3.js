function getElementWidth(content, padding, border) {return `${content}+ ${padding}+ ${Number(border*4)} `}
console.log(getElementWidth("50px", "8px", "4px"))