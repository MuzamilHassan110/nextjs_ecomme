
export const handleCheckOutService = async(body) => {
  
        const res = await fetch('/api/checkout',{
            method: "POST",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify(body),
        });
      
        const result = await res.json();
        console.log("sessionUrl",result.session_url)
        return result.session_url;
}