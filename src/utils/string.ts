export function getDisplayName(params: {username?: string; lastname?: string; firstname?: string}) {
  const {username, lastname, firstname} = params
   const displayMyName = `${firstname ? firstname : ""}${lastname ? ` ${lastname}` : ""}`
   return  displayMyName ? displayMyName : username || ""
}