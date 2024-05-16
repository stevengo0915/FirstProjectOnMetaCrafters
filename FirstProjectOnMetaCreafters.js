//First Project on MetaCrafters JavaScript

/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFT$=[]
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name,age,height,weight) {
    const NFT={
        "Name":name,
        "Age":age,
        "Height":height,
        "Weight":weight,
    }
    NFT$.push(NFT);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0;i<NFT$.length;i++){
        console.log("\nID: \t"+(i+1));
        console.log("Name: \t"+NFT$[i].Name);
        console.log("Age: \t"+NFT$[i].Age);
        console.log("Height: "+NFT$[i].Height);
        console.log("Weight: "+NFT$[i].Weight+"\n");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal Number of NFTs Minted: "+NFT$.length)
}

// call your functions below this line
mintNFT("Steven","24","180 Cm","100 Kg");
mintNFT("Dominic","24","172 Cm","85 Kg");
mintNFT("Kate","24","155 Cm","68 Kg");
mintNFT("Liza","24","164 Cm","80 Kg");
mintNFT("Andree","24","176 Cm","102 Kg");
listNFTs();
getTotalSupply();

