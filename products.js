
// Filter lọc sản phẩm
function filterSelection(category) {
    var elements = document.getElementsByClassName("filterDiv");
    var count = 0;
    for (var i = 0; i < elements.length; i++) {
    if (elements[i].classList.contains(category) || category === "top") {
      if (count < 8) {
        elements[i].classList.remove("hide");
        count++;
      } else {
        elements[i].classList.add("hide");
      }
    } else {
      elements[i].classList.add("hide");
    }
  }
}

// Hiển thị 8 sản phẩm đầu tiên khi trang web được tải lần đầu
filterSelection("top");

//------------------------------------------------------------------------------------------
 // Lấy tất cả các phần tử mục
 var filterItems = document.getElementsByClassName("border py-1 px-4");

// Đặt sự kiện nhấp chuột cho từng mục
for (var i = 0; i < filterItems.length; i++) {
  filterItems[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("current");

    // Xóa lớp CSS "current" cho tất cả các mục
    current[0].className = current[0].className.replace(" current", "");

    // Thêm lớp CSS "current" cho mục được nhấp chuột
    this.className += " current";
  });
}

// Lấy các phần tử cho biểu tượng fa-heart và fa-retweet
var heartIcons = document.querySelectorAll(".fa-heart");
var retweetIcons = document.querySelectorAll(".fa-retweet");

// Thêm lắng nghe sự kiện click cho biểu tượng heart và retweet
for (var i = 0; i < heartIcons.length; i++) {
  heartIcons[i].addEventListener("click", function() {
    showHideMessageDiv();
  });
}

for (var i = 0; i < retweetIcons.length; i++) {
  retweetIcons[i].addEventListener("click", function() {
    showHideMessageDiv();
  });
}

// Hàm để hiển thị và ẩn đi thẻ messageDiv
function showHideMessageDiv() {
  var messageDiv = document.getElementById("messageDiv");
  messageDiv.classList.remove("hidden"); // Xóa lớp 'hidden' để hiển thị thẻ div

  setTimeout(function() {
    messageDiv.classList.add("hidden"); // Thêm lớp 'hidden' để ẩn đi thẻ div sau 3 giây
  }, 5000);
}

//------------------------------------------------------------------------------------------
// Lấy danh sách tất cả các biểu tượng
var icons = document.getElementsByClassName('icon-circle');

// Lặp qua từng biểu tượng để thêm sự kiện click
for (var i = 0; i < icons.length; i++) {
    icons[i].addEventListener('click', function() {
        // Xóa lớp 'icon-circle-xam' từ tất cả các biểu tượng
        for (var j = 0; j < icons.length; j++) {
            icons[j].classList.add('icon-circle-xam');
        }
        
        // Xóa lớp 'icon-circle-xam' cho biểu tượng hiện tại
        this.classList.remove('icon-circle-xam');
    });
}


const blogs1 = document.querySelector('.blogs1');
        const blogs2 = document.querySelector('.blogs2');
        const blogs3 = document.querySelector('.blogs3');
        const icon1 = document.querySelector('.icon-circle:nth-child(1)');
        const icon2 = document.querySelector('.icon-circle:nth-child(2)');
        const icon3 = document.querySelector('.icon-circle:nth-child(3)');

        icon1.addEventListener('click', () => {
            blogs1.style.display = 'block';
            blogs2.style.display = 'none';
            blogs3.style.display = 'none';
        });

        icon2.addEventListener('click', () => {
            blogs1.style.display = 'none';
            blogs2.style.display = 'block';
            blogs3.style.display = 'none';
        });

        icon3.addEventListener('click', () => {
            blogs1.style.display = 'none';
            blogs2.style.display = 'none';
            blogs3.style.display = 'block';
        });
