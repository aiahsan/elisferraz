import React from 'react'
import Sidebar from "react-sidebar";
import { useMediaQuery } from 'react-responsive'
import SideMenu from './sidemenu'
import {HiMenuAlt3} from 'react-icons/hi'
export default ()=>{
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })
    const [sidebarOpen, setsidebarOpen] = React.useState(false)

    return <>
    <div className="jdsfndfe">
    <div className="container">
        <div className="sdanierhseras">
            <div>
                <img className="logo" src="/images/logo.png"/>
            </div>
                {
           !isTablet?<>
           <div className="ndirerer2">
                <a>
                HOME
                </a>
                <a>
                ELIS Pra Você
                </a>
                
                <a>
                MENTORIAS
                </a>
                <a>
                Comece AQUI
                </a>
                <a>
                OnLINE Gratuito
                </a>

                <a className="bsfker">
                Fale COMIGO
                </a>

            </div>
    
           </>:<>
           <button className="btn hsdfud" onClick={()=>setsidebarOpen(true)}>
               <HiMenuAlt3 color="white" size={40}/>
           </button>
           <Sidebar
        sidebar={<SideMenu/>}
        open={isTablet && sidebarOpen}
        onSetOpen={()=>{setsidebarOpen(false)}}
        styles={{ sidebar: { background: "white",position:'fixed' ,backdropFilter: 'blur(2px)'} }}
        pullRight={true}
        
      ></Sidebar>
      </>
       }
                </div>
    </div>
    </div>
    </>
}