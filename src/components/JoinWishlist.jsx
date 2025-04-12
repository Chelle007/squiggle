import React from 'react';

export default function JoinWishlist() {
    return (
        
            <div className="bg-white shadow-lg w-full max-w-md overflow-hidden">
                <div className="p-2">
                    <div className="overflow-hidden bg-pink-50 mb-4">
                        <img 
                        src="https://fastly.picsum.photos/id/902/200/300.jpg?hmac=jcXqlZDNedKqsptpWe_80nmMFRvBXBCnWCpzYwJik3g" 
                        alt="Pastel Nike Air Force 1 shoes" 
                        className="w-full object-cover"
                        />
                    </div>
                    
                    <div className="">
                        <div>
                            <h4 className="font-bold text-black">White Pinkish<br />Nike Shoes</h4>
                            <p className="font-semibold mt-2">$100.00</p>
                        </div>
                        
                        <div className="flex items-center">
                        <div className="flex -space-x-2 mr-3">
                            <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                                <img src="https://fastly.picsum.photos/id/902/200/300.jpg?hmac=jcXqlZDNedKqsptpWe_80nmMFRvBXBCnWCpzYwJik3g" alt="User 1" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-black">
                                <img src="https://fastly.picsum.photos/id/902/200/300.jpg?hmac=jcXqlZDNedKqsptpWe_80nmMFRvBXBCnWCpzYwJik3g" alt="User 2" className="w-full h-full object-cover opacity-0" />
                            </div>
                            <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                                <img src="https://fastly.picsum.photos/id/902/200/300.jpg?hmac=jcXqlZDNedKqsptpWe_80nmMFRvBXBCnWCpzYwJik3g" alt="User 3" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        
                        <button className="bg-green-200 text-black font-semibold py-3 px-12 rounded-full">
                            Join
                        </button>
                        </div>
                    </div>
                </div>
            </div>
    );
}