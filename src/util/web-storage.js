export const clearCookies = () => {
  document.cookie.split(";").forEach(cookie => {
    console.log(cookie);
    
    const name = cookie.split("=")[0].trim();
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
  });
};