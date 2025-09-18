const getOrderDetails=async()=>{
    const orderData=JSON.parse(localStorage.getItem("Order"))||[]
    console.log(orderData)
    const orderDetails=document.getElementById("orderDetails")
    orderDetails.innerHTML=
    `
       <div class="w-[90%] max-w-xl flex flex-col justify-center border-2 border-slate-200/50 rounded-lg shadow-xl p-4">
          <h1 class="font-bold text-3xl text-start">Thank You For Your Purchase</h1>
          <p>Your order will be processed within 24 hours during working days.
          </p>
          <div class="flex flex-col mb-4 md:mb-8">
             <h2 class="font-semibold text-lg mt-4">Billing address<h2>
             <div class="flex gap-2">
                <p>Name</p>
                <p>${orderData.name}</p>
             </div>
             <div class="flex gap-2">
                <p>Email</p>
                <p>${orderData.email}</p>
             </div>
             <div class="flex gap-2">
                <p>Address</p>
                <p>${orderData.address}</p>
             </div>
             <div class="flex gap-2">
                <p>Phone Number</p>
                <p>${orderData.phoneNumber}</p>
             </div>
             <div class="flex gap-2">
               <p>Total Cost</p>
             <p>${parseInt(orderData.totalCost)}</p>
             </div>
             <div class="flex gap-2">
              <p>Payment Method</p>
             <p>${orderData.paymentOption}</p>
             </div>
             <div class="flex gap-2">
               <p>Expected Delivery</p>
             <p>${orderData.expectedDelivery}</p>
             </div>
          </div>
          <a href="index.html" class="bg-green-600 py-4 text-white rounded-sm"><button class="mx-auto w-full">Continue To Shopping</button></a>
       </div>
    `
}

document.addEventListener("DOMContentLoaded",getOrderDetails)