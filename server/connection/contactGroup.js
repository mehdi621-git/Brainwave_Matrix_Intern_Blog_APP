import group from "../model/contactGroup.js"

export const buildingGroupsForContact =async (req,res)=>{
   console.log("the res is",req.body)
    
    // Process the data...
    // Example: Interact with a database or perform some action with the received data

    // Simulate database operation or processing
    // const newGroup = {
    //   sender,
    //   writer,
    //   text,
    // };
    // console.log('Processed group:', newGroup);

    // // Respond to client
    // return res.status(200).json({ msg: 'Saved successfully' });

    //   } catch (err) {
    //     console.error("Error in backend route:", err);
    //     res.status(500).json({ error: 'Internal Server Error' });
    //   }
      
     try {
          const ConGroup =await  group.findOne({members : {$all : [req.body.sender,req.body.writer]}})
          console.log("ocn",ConGroup)
          if(ConGroup){
            ConGroup.messages.push({sender : req.body.sender , content : req.body.text})
            await ConGroup.save()
          }else{
         const newGroup =  new group({
            members :[req.body.sender,req.body.writer],
            message :[
                {
                    sender : req.body.sender,
                    content :req.body.text
                }
            ]
         })
         await newGroup.save()
         console.log(newGroup)
        }
        return res.status(200).json({msg:'saved'})
     } catch (error) {
        return res.status(500).json({msg :"Internal Server Error For Sending Messages",error :error.message})
      
     }
}

export const GettingContactMessages =async(req,res)=>{
    //const {sender ,writer} = req.params.data
   console.log(req.query)

    
    console.log(req.query)
    try {
        const conv = await group.findOne({members : {$all :[req.query.sender,req.query.writer]}})
        if(conv){
            // const senderSocketId = emailToSocketMap.get(sender);
            // const writerSocketId = emailToSocketMap.get(writer);
            // if (senderSocketId) {
            //     io.to(senderSocketId).emit('messagesRetrieved', conv.messages);
            //   }
        
            //   if (writerSocketId) {
            //     io.to(writerSocketId).emit('messagesRetrieved', conv.messages);
            //   }
            return res.status(200).json(conv.messages)
        }
       
        return res.status(404).json({msg:"No Message Avliable"})
       
    } catch (error) {
        
        return res.status(500).json({msg :"Internal Server Error For Messages",error :error.message})
         
    }
}