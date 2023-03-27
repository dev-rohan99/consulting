import React from 'react';
import {Bars3BottomRightIcon, ChevronDownIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';


const Header = () => {
  return (
    <>
    
      <header>
        <div className='w-[400px] lg:w-[1120px] flex item-center justify-between m-auto pt-6 pb-6'>
          <div className="w-[200px]">
            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9Ii0zNDAgNDA1LjQgMTcxIDQxIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IC0zNDAgNDA1LjQgMTcxIDQxIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggZmlsbD0iI2ZmZiIgZD0iTS0xOTQuNCw0NDRjLTEuNSwxLjUtMy44LDIuMy03LjEsMi4zYy0zLjIsMC01LjgtMC43LTguMS0xLjlsMS44LTMuOGMxLjcsMSwzLjUsMS41LDUuNywxLjUKCWMyLjgsMCw0LjMtMS40LDQuMy00di0wLjZjLTEuMSwxLjMtMi42LDIuNC01LDIuNGMtNCwwLTcuMi0yLjktNy4yLTcuNmMwLTQuNywzLjMtNy42LDctNy42YzIuNCwwLDMuOSwxLDUuMSwyLjN2LTEuOWg1Ljd2MTIuMwoJQy0xOTIuMyw0NDAuNS0xOTMsNDQyLjUtMTk0LjQsNDQ0eiBNLTIwMS4zLDQyOS4yYy0xLjksMC0zLjMsMS40LTMuMywzLjJjMCwxLjgsMS40LDMuMSwzLjMsMy4xYzEuOSwwLDMuMy0xLjQsMy4zLTMuMgoJQy0xOTgsNDMwLjYtMTk5LjMsNDI5LjItMjAxLjMsNDI5LjJ6IE0tMjE3LDQzMi42YzAtMS44LTAuOS0yLjctMi4zLTIuN2MtMS40LDAtMi40LDEtMi40LDIuN3Y4LjhoLTUuN3YtMTYuMmg1Ljd2Mi4zCgljMS4xLTEuNCwyLjYtMi42LDQuOS0yLjZjMy40LDAsNS41LDIuMyw1LjUsNnYxMC42aC01LjdWNDMyLjZ6IE0tMjM1LjIsNDE5LjVoNS45djQuMmgtNS45VjQxOS41eiBNLTI0MC4yLDQzNS4yCgljMCwxLjEsMC41LDEuNiwxLjYsMS42YzAuOCwwLDEuNS0wLjIsMi4yLTAuNXY0LjVjLTEsMC42LTIuNCwwLjktNCwwLjljLTMuNCwwLTUuNS0xLjUtNS41LTUuNHYtNi42aC0xLjl2LTQuNmgxLjl2LTQuMWg1Ljd2NC4xCgloMy44djQuNmgtMy44VjQzNS4yeiBNLTI1NC42LDQxOS41aDUuN3YyMS45aC01LjdWNDE5LjV6IE0tMjYyLjMsNDM5LjJjLTEsMS4zLTIuNSwyLjYtNC45LDIuNmMtMy40LDAtNS41LTIuMy01LjUtNnYtMTAuNmg1Ljd2OC44CgljMCwxLjgsMC45LDIuNywyLjMsMi43YzEuNCwwLDIuNC0xLDIuNC0yLjd2LTguOGg1Ljd2MTYuMmgtNS43VjQzOS4yeiBNLTI3My43LDQzNi4zYzAsMy42LTIuNyw1LjQtNi42LDUuNGMtMi43LDAtNS40LTAuOC03LjctMi40CglsMi4xLTMuNWMxLjksMS4yLDMuOSwxLjksNS42LDEuOWMxLDAsMS40LTAuMywxLjQtMC45YzAtMC42LTAuOS0wLjktMi42LTEuNGMtMy4yLTAuOS01LjgtMS45LTUuOC01LjNjMC0zLjQsMi44LTUuNCw2LjUtNS40CgljMi40LDAsNC44LDAuNyw2LjcsMS45bC0xLjksMy42Yy0xLjctMC45LTMuNS0xLjUtNC44LTEuNWMtMC45LDAtMS4zLDAuMy0xLjMsMC44YzAsMC42LDAuOSwwLjksMi42LDEuNAoJQy0yNzYuMiw0MzItMjczLjcsNDMzLjEtMjczLjcsNDM2LjN6IE0tMjk0LjIsNDMyLjZjMC0xLjgtMC45LTIuNy0yLjMtMi43Yy0xLjQsMC0yLjQsMS0yLjQsMi43djguOGgtNS43di0xNi4yaDUuN3YyLjMKCWMxLjEtMS40LDIuNi0yLjYsNC45LTIuNmMzLjQsMCw1LjUsMi4zLDUuNSw2djEwLjZoLTUuN1Y0MzIuNnogTS0zMTQuOCw0NDEuOGMtNS4yLDAtOC45LTMuOC04LjktOC41YzAtNC42LDMuOC04LjUsOS04LjUKCWM1LjIsMCw4LjksMy44LDguOSw4LjVDLTMwNS44LDQzNy45LTMwOS42LDQ0MS44LTMxNC44LDQ0MS44eiBNLTMxNC44LDQyOS42Yy0yLjEsMC0zLjQsMS42LTMuNCwzLjdjMCwyLDEuNCwzLjcsMy41LDMuNwoJYzIuMSwwLDMuNC0xLjcsMy40LTMuN0MtMzExLjMsNDMxLjMtMzEyLjgsNDI5LjYtMzE0LjgsNDI5LjZ6IE0tMzMwLjMsNDI5LjZjLTIuMSwwLTMuMywxLjYtMy4zLDMuN2MwLDIuMSwxLjMsMy43LDMuMiwzLjcKCWMxLjQsMCwyLjItMC43LDMuMS0xLjdsMy45LDIuOGMtMS41LDIuMi0zLjcsMy43LTcuMiwzLjdjLTQuOSwwLTguNS0zLjgtOC41LTguNWMwLTQuNiwzLjYtOC41LDguNy04LjVjMy4zLDAsNS41LDEuNCw2LjksMy42CglsLTMuOCwyLjhDLTMyOC4xLDQzMC4xLTMyOSw0MjkuNi0zMzAuMyw0MjkuNnogTS0yMjkuNCw0NDEuNGgtNS43di0xNi4yaDUuN1Y0NDEuNHoiLz4KPHBhdGggZmlsbD0iI2ZkZTQyOCIgZD0iTS0yMDIsNDA1LjRoMzNsLTksMTVoLTMyTC0yMDIsNDA1LjR6Ii8+CjxwYXRoIGZpbGw9IiMwMDJlNWIiIGQ9Ik0tMTgzLjcsNDE0LjhoLTF2MmgtMS45di03aDNjMS44LDAsMi45LDAuOSwyLjksMi41Qy0xODAuNyw0MTMuOS0xODIsNDE0LjgtMTgzLjcsNDE0Ljh6IE0tMTgzLjgsNDExLjQKCWgtMC45djEuOGgwLjljMC43LDAsMS4xLTAuNCwxLjEtMC45Qy0xODIuNyw0MTEuNy0xODMuMSw0MTEuNC0xODMuOCw0MTEuNHogTS0xOTEuMiw0MTYuOGwtMS40LTRsLTEuNCw0aC0xLjdsLTIuMy03aDJsMS4yLDQKCWwxLjMtNC4xaDEuN2wxLjMsNC4xbDEuMi00aDJsLTIuMyw3SC0xOTEuMnoiLz4KPC9zdmc+Cg==" alt="" />
          </div>

          <div className='block md:hidden text-white flex items-center'>
            <a className='pl-4 pt-2 pb-2' href=""><Bars3BottomRightIcon className="h-10"/></a>
          </div>

          <div className='hidden md:block'>
            <ul className='text-white flex items-center'>
              <li className='mr-4 relative'><Link href={"/"}><a className='pl-4 pr-4 pt-2 pb-2 inline-flex items-center headerMenuItem' href="">Home <ChevronDownIcon className="h-4 ml-2"/></a></Link></li>
              <li className='mr-4 relative'><Link href={'/demos'}><a className='pl-4 pr-4 pt-2 pb-2 inline-flex items-center headerMenuItem'>Demos <ChevronDownIcon className="h-4 ml-2"/></a></Link></li>
              <li className='mr-4 relative'><a className='pl-4 pr-4 pt-2 pb-2 inline-flex items-center headerMenuItem' href="">Features <ChevronDownIcon className="h-4 ml-2"/></a></li>
              <li className='mr-5 relative'><Link href="/tutorials"><a className='pl-4 pr-4 pt-2 pb-2 inline-flex items-center headerMenuItem'>Tutorials<ChevronDownIcon className="h-4 ml-2"/></a></Link></li>
              
              <li><a className='pl-4 pr-4 pt-3 pb-3 text-black rounded-[3px] inline-flex items-center font-medium bg-[#fde428] hover:bg-[#002E5B] hover:text-white' href="">Purchase <ShoppingCartIcon className="h-4 ml-2"/></a></li>
            </ul>
          </div>
        </div>
      </header>
    
    </>
  )
}

export default Header;
