export const truncateText = (text: string, txtLength: number) => {
    const txt = text?.toString();
    return txt?.length > txtLength ? `${txt.substring(0, txtLength)}...` : txt;
  };
    
  export const allowOnlyNumber = (event: any) => {
    if (!((event.which >= 48 && event.which <= 57) || event.which === 46)) {
      event.preventDefault();
    }
  };