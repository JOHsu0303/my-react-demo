import { useEffect } from "react";

import $ from 'jquery';
import './App.css';

export default function App() {

    useEffect(() => {
        // 移入 => mouseover()
        // 移出 => mouseout()
        // 移動 => mousemove()
        // X、Y座標 => pageX、pageY
        // 取得HTML內容 => html()
        // 淡入 => fadeIn()
        // 淡出 => fadeOut()
        // 速度 => 毫秒 => (slow, normal, fast)
        // 尋找指定的名稱 => has()
        // 新增HTML元素 => append()
        // 取得子元素 => children()

        // 當滑鼠碰到超連結時，檢查「has()」是否有ttpShow類別
        $('a:has(.ttpShow)')
            .on('mouseover', function (e) {
                // 動態稱加「append()」一個div區域在body標籤中
                // 取得超連結指定的子元素「children()」中的html內容「html()」
                $('body').append('<div id="ttpPanel">' + $(this).children('.ttpShow').html() + '<div/>');
                $('#ttpPanel').css({
                    top: (e.pageY + 10) + 'px',
                    left: (e.pageX + 10) + 'px',
                }).fadeIn('500');
            })
            .on('mouseout', function () {
                $('#ttpPanel').remove();
            })
            .on('mousemove', function (e) {
                $('#ttpPanel').css({
                    top: (e.pageY + 10) + 'px',
                    left: (e.pageX + 10) + 'px',
                });
            })
    }, [])

    return (
        <>
            <h2>ToolTip顯示說明</h2>
            <p>
                Lorem, ipsum dolor sit amet
                <a href="#">
                    consectetur
                    <span className="ttpShow">consectetur內容說明...</span>
                </a>
                adipisicing elit. Ipsum optio facilis eveniet a
                <a href="#">
                    explicabo
                    <span className="ttpShow">
                        <img src="./img0429/p1.jpg" alt="" style={{width:'100px'}}/>
                        <p>
                            Lorem ipsum dolor sit amet.
                        </p>
                    </span>
                </a>
                laborum ducimus facere? Non eveniet iusto iure sit quia nihil iste nesciunt rerum dolorem! Magnam omnis delectus asperiores ipsa ut debitis similique, aspernatur ab eaque incidunt eius voluptas odit sequi enim itaque deserunt laboriosam a mollitia minus quibusdam, magni ex unde nemo. Fuga placeat magnam sint sed quibusdam, error maxime dolor, fugit impedit praesentium totam eaque enim voluptatibus! Ab quasi eum expedita delectus iste dolor? Earum magni exercitationem illo facilis delectus ea deserunt nostrum dicta amet, facere eveniet eos consequatur veniam cum? Nulla nesciunt minus itaque suscipit similique, inventore iusto debitis optio dolor dicta aperiam provident ut? Necessitatibus architecto iste labore voluptatem maxime id doloremque aliquam? Tempora totam officiis quos iusto. Delectus officiis cupiditate, doloribus tenetur cum necessitatibus, at nisi quaerat quod distinctio aperiam accusantium. Quasi a rem magni explicabo, dolore repellendus enim nihil itaque voluptate fugit, eius doloremque non ipsam. Illo officiis dolorem numquam debitis nam, perspiciatis autem consectetur quasi ipsa? Qui amet architecto iusto deserunt ea incidunt. Aut velit quidem rerum. Quae commodi explicabo nostrum sequi optio quibusdam id non amet? Architecto adipisci ullam laudantium accusantium cum eos maiores voluptas velit eaque, vitae, fugiat enim explicabo nobis quasi, sequi reprehenderit? Blanditiis vitae ducimus et! Dolorum animi doloribus sit quibusdam totam quos earum, cum voluptate consectetur, obcaecati perferendis fugiat eum deserunt magni quae sequi. Laboriosam tenetur impedit id doloribus quisquam a, dolorum magni, officiis ipsa labore inventore veniam fugiat qui provident recusandae itaque aut enim eos ut. Laudantium quis expedita assumenda, facilis a dolorum ratione alias quae harum dicta cupiditate accusantium totam. Dolorum recusandae optio, fugit nemo distinctio aspernatur dolores. Incidunt quibusdam vel placeat officia dicta veniam maiores illo iure voluptatem molestias fugiat consequuntur libero voluptates, modi voluptatum natus architecto, ad adipisci distinctio voluptate quisquam earum. Voluptatibus quasi nobis, fugiat qui repellat debitis fugit iusto excepturi ipsum? Fugit assumenda repellat, saepe velit voluptas ducimus dolor hic distinctio exercitationem placeat, mollitia expedita quisquam ipsa inventore ab modi reiciendis eveniet rerum atque a sit? Earum eveniet ullam porro, rerum ratione laudantium dicta voluptatum aliquam perspiciatis in, autem voluptas perferendis temporibus enim, molestiae voluptatibus laboriosam alias quaerat esse soluta? Provident sed enim delectus harum debitis qui alias consectetur aspernatur eligendi ut, tempora explicabo, reprehenderit fuga possimus, voluptates unde ab. Dicta earum facere perspiciatis ullam dignissimos, officia laudantium a voluptates, sint, perferendis voluptatum excepturi quis distinctio ratione voluptas? Maiores repellat consectetur commodi! Aperiam, minus. Repudiandae fuga aperiam quas. Fugit ad nihil repellendus quas voluptatem, dolor itaque consequatur excepturi doloribus culpa, facilis harum voluptates neque similique? Saepe, consequatur ea, molestiae perferendis voluptate quas alias quaerat dolores velit ex porro nisi voluptatibus numquam eligendi. Minima modi eos porro cupiditate facere autem architecto similique voluptates ullam quae est error reprehenderit, dolorem voluptatum ipsa aperiam delectus. Delectus iusto assumenda reprehenderit aut, esse doloribus laborum quos repellat error labore tenetur eum, mollitia ex magni laboriosam aspernatur explicabo dolores ipsa ad a nobis in accusamus nihil voluptatum? Quidem, quos dolore. Odit qui accusamus alias non.
            </p>
        </>
    )
}