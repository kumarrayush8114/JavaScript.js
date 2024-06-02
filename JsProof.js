/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// 1. Create a variable to hold your NFTs
let nftCollection = [];

// 2. This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(Title, artist, dateGenerated, description) {
    const nft = {
        Title: Title,
        artist: artist,
        dateGenerated: dateGenerated,
        description: description
    };
    nftCollection.push(nft);
}

// 3. Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < nftCollection.length; i++) {
        console.log(`NFT #${i + 1}`);
        console.log(`Title: ${nftCollection[i].Title}`);
        console.log(`Artist: ${nftCollection[i].artist}`);
        console.log(`Date Generated: ${nftCollection[i].dateGenerated}`);
        console.log(`Description: ${nftCollection[i].description}`);
        
    }
}

// 4. Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nftCollection.length;
}

// Call your functions below this line
mintNFT('CoinLeopard', 'Ayush Kumar', '2024-05-31', 'A unique digital collectible.');
mintNFT('GraphicGoat', 'Dhruv Nirmaniya', '2024-05-01', 'A beautiful piece of generative art.');

console.log('List of all NFTs:');
listNFTs();

console.log('Total number of NFTs minted: ' + getTotalSupply());
