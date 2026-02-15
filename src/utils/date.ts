const dayOfWeek = ["Lun.", "Mar.", "Mer.", "Jeu.","Ven.", "Sam.", "Dim."]
const MonthOfYear = ["Jan.", "Fev.", "Mar.", "Avr.","Mai", "Juin", "Juil.", "Août", "Sept.", "Oct.", "Nov.", "Dec."]

const formatDay = (day: number) => {
  return `0${day}`.slice(-2)
}
const formatDate = (value: string) => {
    const date = new Date(value.split(" ")[0]);
    return `${formatDay(date.getDate())} ${MonthOfYear[date.getMonth()]}  ${date.getFullYear()}`
    
}

export { formatDate }

