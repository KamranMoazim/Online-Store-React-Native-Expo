import client from "./client"


const endpoint = "/listings";

const getListings = () => client.get(endpoint);

const addListing = (listing, onUploadProgressFunc) => {
    // console.log(listing)
    const data = new FormData();

    data.append("title", listing.title);
    data.append("title", listing.price);
    data.append("title", listing.description);
    data.append("title", listing.category.value);

    listing.images.forEach((image, index)=> {
        data.append("images", {
            name:"image"+index,
            type:"image/jpeg",
            uri:image
        })
    });

    if (listing.location) {
        data.append("location", JSON.stringify(listing.location));
    }

    const response = client.post(endpoint, data, {
        // onUploadProgress:(progress)=>console.log(progress)
        onUploadProgress:(progress)=>onUploadProgressFunc(progress.loaded / progress.total)
    });
    // console.log(response)
    return response
}


export default {
    addListing,
    getListings,
}