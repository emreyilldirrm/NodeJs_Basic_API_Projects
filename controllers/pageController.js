const getHomepage = async (req,res) => {
    try {
        res.status(200).json(
            {
                succes:true,
                message:"Home Page"
            }
        )
    } catch (error) {
        res.status(401).json(
            {
                succes:false,
                message:"Can't get Login Page",
                err
            }
        )        
    }
}


const getLoginpage = async (req,res) => {
    try {
        res.status(200).json(
            {
                succes: true,
                message:"Login page"
            }
        )
    } catch (error) {
        res.status(401).json(
            {
                succes:false,
                message:"Can't get Login Page",
                err
            }
        )
    }
}


const getRegisterpage = async (req,res) => {
    try {
        res.status(200).json(
            {
                succes:true,
                message:"Register Page"
            }
        )
    } catch (error) {
        res.status(401).json(
            {
                succes:false,
                message:"Can't get Login Page",
                err
            }
        )
    }
}

module.exports = {
    getLoginpage,
    getHomepage,
    getRegisterpage

}