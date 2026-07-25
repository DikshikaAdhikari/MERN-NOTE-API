const fs = require("fs")
const path = require ("path");
const NOTE_DIR = path.join(__dirname, "../notes" );


 const getAllnotes = (req, res)=> {

    const {search} = req.query
    fs.readdir(NOTE_DIR, (err, files) => {
    if (err) return res
    .status(500)
   .json({error: "failed to read notes directory"})

   let notes = files.filter(file => file.endsWith('.txt'))
   if(search) {
    notes = notes.filter(note => note.includes(search))
   }

   res.json({
    success: true,
    data: notes,
    total: notes.length
   })
})
}
//POST create note

const createNote = (req, res) => {
   //1. invoke /retrive data
   const { fileName, content} = req.body

   //2. validating the incoming data
   if (!fileName || !fileName.trim()) {
      return res.status(400).json({
         message: "filename is required"
      })
   }
   if (!content || !content.trim()){
      return res.status(400).json({
         message: "content is required"
      })
   }

   //3. validation for only .txt format
   if(!fileName.endsWith(".txt")){
      return res.status(400).json({
         message:"Filename must end with .txt"
      })
   }
   //4. defining file path
  const filePath = path.join(NOTE_DIR, fileName)

  //5. file should be created by server
  fs.writeFile(filePath, content.trim(), "utf-8", (err) =>{
   if(err) {
      return res.status(500).json({
         message: "couldnot save the file "
      })
   }
   // json data should be send as a response
   res.status(201).json({
      success: true,
      message: `note created sucessfully ${fileName}`,
      createdAt: new Date().toISOString()
   })
  })
}
const updateNote = (req, res) => {
    const { fileName, content } = req.body;

    if (!fileName || !fileName.trim()) {
        return res.status(400).json({
            success: false,
            message: "Filename is required"
        });
    }

    if (!content || !content.trim()) {
        return res.status(400).json({
            success: false,
            message: "Content is required"
        });
    }

    const filePath = path.join(NOTE_DIR, fileName);

    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            return res.status(404).json({
                success: false,
                message: "Note not found"
            });
        }

        fs.writeFile(filePath, content.trim(), "utf-8", (err) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: "Failed to update note"
                });
            }

            res.status(200).json({
                success: true,
                message: "Note updated successfully"
            });
        });
    });
};
module.exports = {
    getAllnotes,
    createNote,
        updateNote
};
