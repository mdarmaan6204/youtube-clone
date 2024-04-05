import React from 'react'

const WatchVideoInfo = ({info}) => {
    console.log(info);
  return (
    <div>
        <div>
            <p className="font-bold text-xl my-2 mx-2">{info?.title}</p>
        </div>
        <div>CHANEL</div>
        <div>
            <p>122k views 2 years ago</p>
            <p>{info?.description}</p>
        </div>
    </div>
  )
}

export default WatchVideoInfo