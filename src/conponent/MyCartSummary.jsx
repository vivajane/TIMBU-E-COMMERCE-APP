
const MyCartSummary = () => {
  return (
    <div className="md:px-10 px-2 border border-gray-400 py-6">
      <h1 className="font-bold mb-4">Order Sumnary</h1>
      <div className="flex justify-between">
        <h1>Subtotal</h1>
        <h1>12000</h1>
      </div>
      <div className="flex justify-between">
        <h1>Delivery Fee</h1>
        <h1>12000</h1>
      </div>
      <div className="flex justify-between">
        <h1>Total</h1>
        <h1>12000</h1>
      </div>
      <form className="flex gap-4" action="">
        <input className=" border-gray-400 border-[1px] my-3 py-2 rounded"  type="tel" name="" id="" placeholder="Apply promo code  " />
        <div className="my-3"><button className="bg-black text-white px-8 rounded py-2">Apply</button></div>
      </form>
      
    </div>
  )
}

export default MyCartSummary
