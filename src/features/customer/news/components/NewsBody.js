import React from "react";
import "./NewsBody.css";

function NewsBody() {
  return (
    <div style={{ marginTop: 50 }}>
      <div className="news">
        <h4> TOÀN BỘ UIT SNEAKER SALE TỚI 10%</h4>
        <img src={process.env.PUBLIC_URL + `/Imgs/news1.png`} />
        <p>
          Nay 15-18/6 UIT SNEAKER chơi lớn GIẢM LỚN 10% toàn bộ sản phẩm giày
          dép luôn.
        </p>

        <h4> GIỜ HOẠT ĐỘNG CỦA UIT SNEAKER</h4>
        <img src={process.env.PUBLIC_URL + `/Imgs/news2.png`} />
        <p>
          UIT SNEAKER hoạt động FULL NGÀY từ 9:00 - 21:30 từ hôm nay đến mãi về
          sau nhé cả nhà ơi
        </p>
      </div>
    </div>
  );
}

export default NewsBody;
