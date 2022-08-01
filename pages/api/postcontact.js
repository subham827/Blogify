import * as fs from'fs';
export default async function handler(req, res) {
   if (req.method === 'POST') {
    // const body = await req.json();

    console.log(req.body);
    let data = await fs.promises.readdir('contactdata');
     console.log(data);
    fs.writeFile(`contactdata/${data.length+1}.json`, JSON.stringify(req.body),()=>{})
    res.status(200).json({ message: 'success' });
  }
       else {
    
   }
    }