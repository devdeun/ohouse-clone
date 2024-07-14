function navbar() {
  const categories = [
    {
      name: "커뮤니티",
      icon: "_home_outline_24",
      subcategories: [
        { text: "홈", href: "/" },
        { text: "추천", href: "javascript:void(0)" },
        { text: "#채널", href: "javascript:void(0)" },
        { text: "집들이", href: "javascript:void(0)" },
        { text: "집사진", href: "javascript:void(0)" },
        { text: "3D인테리어", href: "javascript:void(0)" },
        { text: "살림수납", href: "javascript:void(0)" },
        { text: "콜렉터블", href: "javascript:void(0)" },
        { text: "홈스토랑", href: "javascript:void(0)" },
        { text: "핫플레이스", href: "javascript:void(0)" },
        { text: "육아", href: "javascript:void(0)" },
        { text: "플랜테리어", href: "javascript:void(0)" },
        { text: "반려동물", href: "javascript:void(0)" },
        { text: "캠핑", href: "javascript:void(0)" },
        { text: "취미", href: "javascript:void(0)" },
        { text: "이벤트", href: "javascript:void(0)" },
      ],
    },
    {
      name: "쇼핑",
      icon: "_store_outline_24",
      subcategories: [
        { text: "쇼핑홈", href: "/" },
        {
          text: "카테고리",
          href: "javascript:void(0)",
          subcategories: [
            { text: "여름용품", href: "javascript:void(0)" },
            { text: "가구", href: "javascript:void(0)" },
            { text: "패브릭", href: "javascript:void(0)" },
            { text: "가전·디지털", href: "javascript:void(0)" },
            { text: "주방용품", href: "javascript:void(0)" },
            { text: "식품", href: "javascript:void(0)" },
            { text: "데코·식물", href: "javascript:void(0)" },
            { text: "조명", href: "javascript:void(0)" },
            { text: "수납·정리", href: "javascript:void(0)" },
            { text: "생활용품", href: "javascript:void(0)" },
            { text: "생필품", href: "javascript:void(0)" },
            { text: "유아·아동", href: "javascript:void(0)" },
            { text: "반려동물", href: "javascript:void(0)" },
            { text: "캠핑·레저", href: "javascript:void(0)" },
            { text: "공구·DIY", href: "javascript:void(0)" },
            { text: "인테리어시공", href: "javascript:void(0)" },
            { text: "렌탈·구독", href: "javascript:void(0)" },
            { text: "장보기", href: "javascript:void(0)" },
            { text: "혼수·신혼", href: "javascript:void(0)" },
          ],
        },
        { text: "베스트", href: "javascript:void(0)" },
        { text: "오늘의딜", href: "javascript:void(0)" },
        { text: "리퍼마켓", href: "javascript:void(0)" },
        { text: "오!굿즈", href: "javascript:void(0)" },
        { text: "빠른배송", href: "javascript:void(0)" },
        { text: "오!쇼룸", href: "javascript:void(0)" },
        { text: "바이너리샵", href: "javascript:void(0)" },
        { text: "기획전", href: "javascript:void(0)" },
      ],
    },
    {
      name: "인테리어/생활",
      icon: "_truck_outline_24",
      subcategories: [
        { text: "홈", href: "/" },
        { text: "주거공간시공", href: "javascript:void(0)" },
        { text: "상업공간시공", href: "javascript:void(0)" },
        { text: "시공자재랭킹", href: "javascript:void(0)" },
        { text: "제품설치", href: "javascript:void(0)" },
        { text: "이사", href: "javascript:void(0)" },
        { text: "집보기체크리스트", href: "javascript:void(0)" },
        { text: "아파트시공사례", href: "javascript:void(0)" },
      ],
    },
  ];

  function createMobileNavbar(categories) {
    const nav = document.querySelector(".header-mobile-navbar");
    const ul = document.createElement("ul");
    ul.classList.add("mobile-navbar-category");

    categories.forEach((category) => {
      const li = document.createElement("li");
      li.classList.add("mobile-navbar-category-item");
      const button = document.createElement("button");
      button.innerHTML = `<span class="icon ${category.icon}"></span>${category.name} <span class="icon _chevron_thick_down_12"></span>`;
      button.type = "button";

      button.addEventListener("click", (event) => {
        const allButtons = nav.querySelectorAll(
          ".mobile-navbar-category > .mobile-navbar-category-item button"
        );
        allButtons.forEach((btn) => {
          if (btn !== button) {
            btn.classList.remove("active");
          }
        });

        button.classList.toggle("active");

        const allSubUls = nav.querySelectorAll("ul ul");
        allSubUls.forEach((subUl) => {
          if (subUl !== li.querySelector("ul")) {
            gsap.to(subUl, { height: 0, duration: 0.3 });
          }
        });

        const subUl = li.querySelector("ul");
        if (subUl) {
          const isExpanded = subUl.style.height !== "0px";
          if (isExpanded) {
            gsap.to(subUl, { height: 0, duration: 0.3 });
          } else {
            gsap.set(subUl, { height: "auto" });
            const endHeight = subUl.scrollHeight + "px";
            gsap.fromTo(
              subUl,
              { height: 0 },
              { height: endHeight, duration: 0.3, clearProps: "height" }
            );
          }
        }
      });

      li.appendChild(button);

      if (category.subcategories) {
        const subUl = document.createElement("ul");
        subUl.style.height = "0";
        subUl.style.overflow = "hidden";
        subUl.classList.add("mobile-navbar-subcategory");

        category.subcategories.forEach((subcategory) => {
          const subLi = document.createElement("li");
          subLi.classList.add("mobile-navbar-category-item");

          if (subcategory.subcategories) {
            const subButton = document.createElement("button");
            subButton.innerHTML = `${subcategory.text} <span class="icon _chevron_thick_down_12"></span>`;
            subButton.type = "button";

            subButton.addEventListener("click", () => {
              const subSubUl = subLi.querySelector("ul");
              if (subSubUl) {
                const isExpanded = subSubUl.style.height !== "0px";
                if (isExpanded) {
                  gsap.to(subSubUl, { height: 0, duration: 0.3 });
                } else {
                  gsap.set(subSubUl, { height: "auto" });
                  const endHeight = subSubUl.scrollHeight + "px";
                  gsap.fromTo(
                    subSubUl,
                    { height: 0 },
                    { height: endHeight, duration: 0.3, clearProps: "height" }
                  );
                }
              }
            });

            subLi.appendChild(subButton);

            const subSubUl = document.createElement("ul");
            subSubUl.style.height = "0";
            subSubUl.style.overflow = "hidden";
            subSubUl.classList.add("mobile-navbar-subcategory");

            subcategory.subcategories.forEach((subSubCategory) => {
              const subSubLi = document.createElement("li");
              subSubLi.classList.add("mobile-navbar-category-item");
              const subSubA = document.createElement("a");
              subSubA.textContent = subSubCategory.text;
              subSubA.href = subSubCategory.href;
              subSubLi.appendChild(subSubA);
              subSubUl.appendChild(subSubLi);
            });

            subLi.appendChild(subSubUl);
          } else {
            const subA = document.createElement("a");
            subA.textContent = subcategory.text;
            subA.href = subcategory.href;
            subLi.appendChild(subA);
          }

          subUl.appendChild(subLi);
        });
        li.appendChild(subUl);
      }

      ul.appendChild(li);
    });

    nav.appendChild(ul);
  }

  createMobileNavbar(categories);
}

document.addEventListener("DOMContentLoaded", navbar);
