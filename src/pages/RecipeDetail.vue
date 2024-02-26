<script></script>
<template>
  <header>
        <div class="select-title">
          <img src="/arrow.png" alt="">
          <span>レシピ詳細</span>
          <!-- ここのcss要修正 -->
        </div>
        
    </header>
        <figure>
          <!-- ここにレシピの画像入れてください -->
          <div class="recipe-photo">
            <img src="/Rectangle 8.jpg" alt="">
          </div>
        </figure>
    <main>

      <div class="container">
        <!-- ここにコーディングしてください -->
        <div class ="recipe-info">
          <h1 class="recipe-name">
            卵とトマトの中華風炒め
          </h1>
          <p class="recipe-copy">
            レンジで簡単！栄養満点うどん。
          </p>
        </div>

        <ul class="recipe-ave">
          <li>
            <img src="/time-icon.jpg" alt="">調理時間：15分以下
          </li>
          <li>
            <img src="/cutlery-icon.jpg" alt="">カロリー：660kcal
          </li>
          <li>
            <img src="/star-icon.jpg" alt="">難易度　：難しい
          </li>
        </ul>

        <div class="material">
          <h2>
            材料
          </h2>
          <div class="ingredient">
            <p>
              とり手羽先
            </p>
            <p>
              2~3個
            </p>
          </div>
          <div class="ingredient">
            <p>
              しょうゆ
            </p>
            <p>
              小さじ 3/4
            </p>
          </div>
          <div class="ingredient">
            <p>
              ピーマン
            </p>
            <p>
              2~3本
            </p>
          </div>
        </div>

        <div class="recipe-guide">
          <h2>
            作り方
          </h2>
          <ol>
            <li>
              手羽先は軟骨のところから切り落とします （先の部分はスープに使うとよい）。
            </li>
            <li>
              （1）をさっと洗い、水気をふいて塩、こしょうを多めにふります。グリル（または焼き網）で10～15分焼きます。途中、裏返すときにしょうゆをからめます。
            </li>
            <li>
              ししとうはグリルのあいているところで約3分焼きます。
            </li>
          </ol>
        </div>

      </div>
    </main>
</template>
<style scoped>
 header{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    background-color: #FFFFFF;  
    border-bottom: 1px solid #ECECEC; 
    height: 65px;     
    margin: auto;
    padding-bottom: 7rem;
}



header img{
    width: 12px;
}

header span{
    color: #442A00;
    font-size: 16px;
    font-weight: 700;
    margin-left: 121px;
}

.select-title{
    max-width: 353px;
    margin: 0 auto;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: start;
}


.container{
    max-width: 353px;
    margin-top: 0px;
    margin: 0px auto 0;
}


/* こっから下にコーディングしてください */
/* 上も修正必要であればいじってもらって大丈夫 */

.recipe-photo img{   
   display: block;
   width: 100vw;
    margin-top: 65px; 
    margin-bottom: 0px;    
}

.recipe-name{
    font-size: 20px;
    color: #EF797B;
    font-weight: 700;
    margin-bottom: 12px;
}

.recipe-copy{
    font-size: 14px;
    color: #442A00;
    font-weight: 500;
    margin-bottom: 25px;
}

.recipe-info{
    margin-top: 28px;
    border-bottom: 1px solid #ECECEC;
}

.recipe-ave{
    margin-top: 22px;
    border-bottom: 1px solid #ECECEC;
    padding-bottom: 24px;
    list-style: none;
}
.recipe-ave img {
    width: 18px;
    height: 18px;
}

.recipe-ave li{
    font-size: 14px;
    color: #442A00;
    font-weight: 400;
    margin-bottom: 8px;
    display: flex;
}

.recipe-ave img{
    margin-right: 11px;
}

.material h2{
    font-size: 16px;
    color: #EF797B;
    font-weight: 700;
    margin-top: 24px;
}

.ingredient{
    margin-top: 12px;
    font-size: 14px;
    color: #442A00;
    font-weight: 500;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
}

.material{
    margin-bottom: 24px;
    border-bottom: 1px solid #ECECEC;
    padding-bottom: 24px;
}

.recipe-guide h2{
    font-size: 16px;
    color: #EF797B;
    font-weight: 700;
    margin-top: 28px;
    margin-bottom: 12px;
}

.recipe-guide ol {
    counter-reset: my-counter;
    list-style: none;
    padding: 0;
  }
   
.recipe-guide li {
    margin-bottom: 18px;
    padding-left: 27px;
    position: relative;
    padding-bottom: 16px;
    border-bottom: 1px solid #ECECEC;
    font-size: 14px;
    font-weight: 400;
    color: #442A00;
  }

.recipe-guide li:last-child{
    border-style: none;
  }

.recipe-guide li:before {
    content: counter(my-counter);
    counter-increment: my-counter;
    background-color: #EF797B;
    color: #FFFFFF;
    display: block;
    float: left;
    line-height: 26px;
    margin-left: -30px;
    text-align: center;
    height: 26px;
    width: 26px;
    border-radius: 50%;
    margin-right: 20px;
    font-weight: 700;
  }

.recipe-guide{
    margin-bottom: 100px;
  }
</style>