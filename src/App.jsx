import React from "react";
import Menu from "./Menu/Menu";
import { useState } from "react";

export const App = () => {
  const [menuActive, setMenuActive] = useState(false);
  const items = [
    { value: "Main", href: "/main", icon: "fa-solid fa-house" },
    { value: "Store", href: "/store", icon: "fa-solid fa-store" },
    { value: "About", href: "/about", icon: "fa-solid fa-address-card" },
  ];
  return (
    <div className="app">
      <nav>
        <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
          <span />
        </div>
      </nav>
      <main>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
          eveniet, doloribus odio odit provident facilis iste quas ad quos
          numquam! Accusamus eaque molestiae ipsa accusantium animi culpa
          tempore provident dolores officiis. Autem assumenda reiciendis, omnis
          maxime expedita corrupti! Quis consequatur ex eaque quasi voluptatum
          laudantium iure fuga incidunt, qui laboriosam corrupti, ut ipsam in
          vero veniam, eum corporis enim adipisci recusandae! Vero quam ipsam,
          ea voluptatem assumenda laudantium, cupiditate reiciendis in sed ullam
          modi at consequuntur illo tenetur maiores totam? Expedita, quasi quos?
          Voluptas dolor porro illo optio eaque, atque distinctio perspiciatis
          commodi beatae culpa corporis iusto nesciunt alias natus ea deleniti
          non? Suscipit, soluta? Ea corrupti maiores consectetur dolores commodi
          rem quaerat quia optio omnis. Reprehenderit eveniet aliquid distinctio
          possimus cum in beatae qui animi, dolore quia quam? Natus aperiam
          quaerat nisi modi repellat eos provident expedita alias eaque ipsa,
          necessitatibus, voluptatem, ad ducimus quo voluptas tenetur voluptate
          mollitia vel? Minima neque, laudantium vitae expedita quibusdam
          voluptatem non possimus earum, eius debitis obcaecati atque ipsam amet
          corrupti delectus hic dignissimos dicta repellat ullam consequuntur
          tenetur autem fugit recusandae eveniet? Laudantium aliquid esse,
          deleniti est suscipit ea sapiente possimus aperiam tenetur voluptatem
          recusandae deserunt itaque! Aliquid et nihil maxime, a laudantium eius
          vel quis sint odio magni earum assumenda veniam reprehenderit animi
          cum aspernatur eos doloribus explicabo nulla accusamus dolorem! Fugit
          quae impedit sequi, esse non nostrum neque corporis quidem, veniam,
          qui temporibus? Cumque iusto voluptatum, odio eos molestias, in
          aperiam labore, unde reiciendis excepturi laudantium assumenda nihil
          ipsa animi cupiditate. Reiciendis iure voluptatem fuga quidem, ipsam
          quia, voluptas ullam ratione sunt facere placeat ducimus a enim sequi
          accusamus sit odit illum. Tempora amet, accusantium beatae, atque
          repudiandae, assumenda omnis sapiente unde iusto magni quasi error
          placeat nemo pariatur. Et consequuntur rem voluptatibus qui eius vitae
          unde quod excepturi ut.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
          eveniet, doloribus odio odit provident facilis iste quas ad quos
          numquam! Accusamus eaque molestiae ipsa accusantium animi culpa
          tempore provident dolores officiis. Autem assumenda reiciendis, omnis
          maxime expedita corrupti! Quis consequatur ex eaque quasi voluptatum
          laudantium iure fuga incidunt, qui laboriosam corrupti, ut ipsam in
          vero veniam, eum corporis enim adipisci recusandae! Vero quam ipsam,
          ea voluptatem assumenda laudantium, cupiditate reiciendis in sed ullam
          modi at consequuntur illo tenetur maiores totam? Expedita, quasi quos?
          Voluptas dolor porro illo optio eaque, atque distinctio perspiciatis
          commodi beatae culpa corporis iusto nesciunt alias natus ea deleniti
          non? Suscipit, soluta? Ea corrupti maiores consectetur dolores commodi
          rem quaerat quia optio omnis. Reprehenderit eveniet aliquid distinctio
          possimus cum in beatae qui animi, dolore quia quam? Natus aperiam
          quaerat nisi modi repellat eos provident expedita alias eaque ipsa,
          necessitatibus, voluptatem, ad ducimus quo voluptas tenetur voluptate
          mollitia vel? Minima neque, laudantium vitae expedita quibusdam
          voluptatem non possimus earum, eius debitis obcaecati atque ipsam amet
          corrupti delectus hic dignissimos dicta repellat ullam consequuntur
          tenetur autem fugit recusandae eveniet? Laudantium aliquid esse,
          deleniti est suscipit ea sapiente possimus aperiam tenetur voluptatem
          recusandae deserunt itaque! Aliquid et nihil maxime, a laudantium eius
          vel quis sint odio magni earum assumenda veniam reprehenderit animi
          cum aspernatur eos doloribus explicabo nulla accusamus dolorem! Fugit
          quae impedit sequi, esse non nostrum neque corporis quidem, veniam,
          qui temporibus? Cumque iusto voluptatum, odio eos molestias, in
          aperiam labore, unde reiciendis excepturi laudantium assumenda nihil
          ipsa animi cupiditate. Reiciendis iure voluptatem fuga quidem, ipsam
          quia, voluptas ullam ratione sunt facere placeat ducimus a enim sequi
          accusamus sit odit illum. Tempora amet, accusantium beatae, atque
          repudiandae, assumenda omnis sapiente unde iusto magni quasi error
          placeat nemo pariatur. Et consequuntur rem voluptatibus qui eius vitae
          unde quod excepturi ut.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
          eveniet, doloribus odio odit provident facilis iste quas ad quos
          numquam! Accusamus eaque molestiae ipsa accusantium animi culpa
          tempore provident dolores officiis. Autem assumenda reiciendis, omnis
          maxime expedita corrupti! Quis consequatur ex eaque quasi voluptatum
          laudantium iure fuga incidunt, qui laboriosam corrupti, ut ipsam in
          vero veniam, eum corporis enim adipisci recusandae! Vero quam ipsam,
          ea voluptatem assumenda laudantium, cupiditate reiciendis in sed ullam
          modi at consequuntur illo tenetur maiores totam? Expedita, quasi quos?
          Voluptas dolor porro illo optio eaque, atque distinctio perspiciatis
          commodi beatae culpa corporis iusto nesciunt alias natus ea deleniti
          non? Suscipit, soluta? Ea corrupti maiores consectetur dolores commodi
          rem quaerat quia optio omnis. Reprehenderit eveniet aliquid distinctio
          possimus cum in beatae qui animi, dolore quia quam? Natus aperiam
          quaerat nisi modi repellat eos provident expedita alias eaque ipsa,
          necessitatibus, voluptatem, ad ducimus quo voluptas tenetur voluptate
          mollitia vel? Minima neque, laudantium vitae expedita quibusdam
          voluptatem non possimus earum, eius debitis obcaecati atque ipsam amet
          corrupti delectus hic dignissimos dicta repellat ullam consequuntur
          tenetur autem fugit recusandae eveniet? Laudantium aliquid esse,
          deleniti est suscipit ea sapiente possimus aperiam tenetur voluptatem
          recusandae deserunt itaque! Aliquid et nihil maxime, a laudantium eius
          vel quis sint odio magni earum assumenda veniam reprehenderit animi
          cum aspernatur eos doloribus explicabo nulla accusamus dolorem! Fugit
          quae impedit sequi, esse non nostrum neque corporis quidem, veniam,
          qui temporibus? Cumque iusto voluptatum, odio eos molestias, in
          aperiam labore, unde reiciendis excepturi laudantium assumenda nihil
          ipsa animi cupiditate. Reiciendis iure voluptatem fuga quidem, ipsam
          quia, voluptas ullam ratione sunt facere placeat ducimus a enim sequi
          accusamus sit odit illum. Tempora amet, accusantium beatae, atque
          repudiandae, assumenda omnis sapiente unde iusto magni quasi error
          placeat nemo pariatur. Et consequuntur rem voluptatibus qui eius vitae
          unde quod excepturi ut.
        </p>
      </main>
      <Menu
        active={menuActive}
        setActive={setMenuActive}
        header={"BURGER MENU"}
        items={items}
      />
    </div>
  );
};

export default App;
