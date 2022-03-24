function header(){
    return `
    
        <div id="head_top">
          <div>
            <img
              src="https://trapbag.com/wp-content/uploads/2020/04/Weather-Channel-Logo@2x.png"
              alt=""
            />
            <p>
              An <span style="font-weight: bolder">IBM</span> Buisness
              <span style="font-size: 40px">|</span>
            </p>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSv3bULj1tUbIezFwjADJ9-h3LSx57ltF4cQyMIVjGbtoMqNTmDwNlw8ZPIKM6rMjBUQ&usqp=CAU"
              alt=""
              id="TOI"
            />
          </div>
          <div id="search">
            <div>
              <input type="text" placeholder="Search" id="city" />
              <i
                class="fa fa-search"
                style="font-size: 24px"
                onclick="change_url(),get_data()"
              ></i>
            </div>
          </div>
        </div>

        <div id="temp"></div>

        <div id="navbar">
          <ul>
            <li class="nav_comp" ><a href="index.html">Today</a></li>
            <li class="nav_comp" ><a href="weth_hr_data.html">Hourly</a></li>
            <li class="nav_comp" >10 Day</li>
            <li class="nav_comp" >Weekend</li>
            <li class="nav_comp" >Monthly</li>
            <li class="nav_comp" >Radar</li>
            <li class="nav_comp" >More</li>
          </ul>
        </div>
    
    `
}

export default header;