import { render } from "@testing-library/react";
import Header from "@/components/common/Header";

const getContainer = (): HTMLElement => {
  return render(<Header />).container;
};

let container: HTMLElement;
describe("Headers suite tests", () => {
  beforeEach(() => {
    container = getContainer();
  });

  it("Should have Home item", () => {
    const homeItem = container.getElementsByClassName("nav-item")[0];

    expect(homeItem.children[0].innerHTML).toBe("Home");
    expect(homeItem.children[0].getAttribute("href")).toBe("/");
  });

  it("Should have 'Libros' item", () => {
    const booksItem = container.getElementsByClassName("nav-item")[1];

    expect(booksItem.children[0].innerHTML).toBe("Libros");
    expect(booksItem.children[0].getAttribute("href")).toBeNull();
  });


  it("The 'Libros' items should have four sub-items", () => {
    const booksItem = container.getElementsByClassName("nav-item")[1];

    const subItem = booksItem.children[1].children;
    
    expect(subItem.length).toBe(4);
    expect(subItem[0].children[0].innerHTML).toBe("Destacados");
    expect(subItem[1].children[0].innerHTML).toBe("Recientes");
    expect(subItem[2].children[0].innerHTML).toBe("");
    expect(subItem[3].children[0].innerHTML).toBe("Otros");

  })
});
