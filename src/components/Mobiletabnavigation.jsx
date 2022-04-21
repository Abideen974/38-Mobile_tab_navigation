import React,{useEffect} from 'react'
import './navigation.css'
import Image1 from './picture/a.jpg'
import Image2 from './picture/b.jpg'
import Image3 from './picture/c.jpg'
import Image4 from './picture/d.jpg'

function Mobiletabnavigation() {

    useEffect(()=>{
        const contents = document.querySelectorAll('.content')
        // console.log(contents);
        const listItems = document.querySelectorAll('nav ul li')
        console.log(listItems);
        listItems.forEach((item, idx) => {
            item.addEventListener('click', () => {
                hideAllContens()
                hideAllItems()
                item.classList.add('active')
                contents[idx].classList.add('show')
                console.log('item',item);
                console.log('index',idx);
            })
        })
        
        function hideAllContens() {
            contents.forEach((content) =>{
                content.classList.remove('show')
            })
        }
        
        function hideAllItems() {
            listItems.forEach((item) =>{
                item.classList.remove('active')
            })
         
        }

        run()
    })

    const run =() =>{

        
    }
  return (
    <>
        <div className="phone">
        <img src={"https://images.unsplash.com/photo-1650355024554-bb42a9b805b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"} alt="" className='content show '  />
        <img src={"https://images.unsplash.com/photo-1623278116733-07879b6237c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"} alt="" className='content '  />
        <img src={"https://images.unsplash.com/photo-1650269717251-d3e5249a8bc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"} alt="" className='content'  />
        <img src={"https://images.unsplash.com/photo-1650317114682-a579ec7b7c1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"} alt="" className='content'  />
        
            {/* <img src={Image1} alt="" className='content' />
            <img src={Image2} alt="" className='content'/>
            <img src={Image3} alt="" className='content show'/>
            <img src={Image4} alt="" className='content'/> */}

            <nav>
                <ul>
                    <li className='active'>
                        <i className='fas fa-home'></i>
                        <p>Home</p>
                    </li>
                    <li  >
                        <i className='fas fa-box'></i>
                        <p>Work</p>
                    </li>
                    <li >
                        <i className='fas fa-book-open'></i>
                        <p>Blog</p>
                    </li>
                    <li>
                        <i className='fas fa-users'></i>
                        <p>About Us</p>
                    </li>
                </ul>
            </nav>

        </div>

    </>
  )
}

export default Mobiletabnavigation