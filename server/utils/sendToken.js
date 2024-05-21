export const sendToken = (res, user, statusCode, message) =>{

    const token = user.getJwtToken();

    const userData ={
        _id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        tasks: user.tasks,
    }

    const options ={
        httpOnly: true,
        expires: new Date(Date.now()+process.env.JWT_COOKIE_EXPIRE * 60* 1000)
    }

    res.statuscode(statusCode).cookie('taken', token, options).json({success: true, message, })
}