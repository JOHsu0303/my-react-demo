import { useEffect } from "react";
import $ from 'jquery'
import './App.css'

export default function App() {
    useEffect(() => {

        $(function () {
            var setFilter = $('#filterBtn'),           // 取得所有按鈕(按鈕區)
                filterBtn = setFilter.find('a'),       // 篩選按鈕中的 a 元素
                btnAll = $('.allItem'),                // ALL 按鈕
                setList = $('#filterList'),            // 所有篩選列表中的元素(圖片區)
                filterList = setList.find('li'),       // 篩選列表中的li
                listWidth = filterList.outerWidth();   // 篩選列表的寬度



            filterBtn.on('click', function () {
                // 檢查是否被點選，不是才執行
                if (!($(this).hasClass('active'))) {
                    // 目前被點選的按鈕類別名稱，儲存到filterClass
                    var filterClass = $(this).attr('class');

                    // 使用each()方法
                    filterList.each(function () {
                        // 檢查li中是否有被篩選到的類別
                        if ($(this).hasClass(filterClass)) {
                            // yes
                            // 顯示動畫（1.擴展寬度 2.提升透明度顯示圖片）
                            $(this).css({ display: 'block' }).stop().animate({ width: listWidth }, 1500);
                            // find()方法中，使用全域選擇器 => ＊，選取所有filterList所有元素
                            $(this).find('*').stop().animate({ opacity: '1' }, 1500);

                            // 無動畫
                            // $(this).css({ display: 'block' });
                        } else {
                            // no
                            // 顯示動畫（隱藏項目）
                            $(this).find('*').stop().animate({ opacity: '0' }, 1000);
                            $(this).stop().animate({ width: '0' }, 1000, function () {
                                $(this).css({ display: 'none' });
                            });

                            // 無動畫（隱藏項目）
                            // $(this).css({ display: 'none' });
                        }
                    });


                    filterBtn.removeClass('active');      // 清除所有按鈕上的active類別
                    $(this).addClass('active');           // 目前被點擊的按鈕加上active類別
                }
            });

            // 全部顯示
            btnAll.on('click', function () {
                filterList.each(function () {
                    // 有動畫
                    $(this).css({ display: 'block' }).stop().animate({ width: listWidth }, 1500);
                    $(this).find('*').stop().animate({ opacity: '1' }, 1500);

                    // 無動畫
                    // $(this).css({ display: 'block' });
                });
            })

            // 重新載入時，讓ALL按鈕呈現被點選狀態
            btnAll.click();
        })

    }, [])

    return (
        <>
            <div id="wrapper">
                {/* 按鈕區 */}
                <div id="filterBtn">
                    <a href="javascript:;" className="allItem">ALL</a>
                    <a href="javascript:;" className="cats">CATS</a>
                    <a href="javascript:;" className="food">FOOD</a>
                    <a href="javascript:;" className="view">VIEW</a>
                </div>

                {/* 圖片區 */}
                <div id="filterList">
                    <ul>
                        <li className="view"><img src="./img0514/view1.jpg" alt="" /></li>
                        <li className="cats"><img src="./img0514/cats3.jpg" alt="" /></li>
                        <li className="food"><img src="./img0514/food3.jpg" alt="" /></li>
                        <li className="view"><img src="./img0514/view3.jpg" alt="" /></li>
                        <li className="food"><img src="./img0514/food4.jpg" alt="" /></li>
                        <li className="view"><img src="./img0514/view4.jpg" alt="" /></li>
                        <li className="cats"><img src="./img0514/cats1.jpg" alt="" /></li>
                        <li className="cats"><img src="./img0514/cats4.jpg" alt="" /></li>
                        <li className="view"><img src="./img0514/view2.jpg" alt="" /></li>
                        <li className="cats"><img src="./img0514/cats5.jpg" alt="" /></li>
                        <li className="food"><img src="./img0514/food1.jpg" alt="" /></li>
                        <li className="cats"><img src="./img0514/cats6.jpg" alt="" /></li>
                        <li className="food"><img src="./img0514/food2.jpg" alt="" /></li>
                        <li className="cats"><img src="./img0514/cats2.jpg" alt="" /></li>
                        <li className="food"><img src="./img0514/food5.jpg" alt="" /></li>
                    </ul>
                </div>
            </div>

        </>
    )

}