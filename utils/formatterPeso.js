const formatterPeso = (price) => {
  
  const priceNumber = Number(price)
  const priceWithFormat = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  })
  return (priceWithFormat.format(priceNumber))
}

  export default formatterPeso