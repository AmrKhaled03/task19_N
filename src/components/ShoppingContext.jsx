import { createContext ,useState,useEffect} from "react";
import Swal from "sweetalert2";
import img1 from "../img/products/f1.jpg";
import img2 from "../img/products/f2.jpg";
import img3 from "../img/products/f3.jpg";
import img4 from "../img/products/f4.jpg";
import img5 from "../img/products/f5.jpg";
import img6 from "../img/products/f6.jpg";
import img7 from "../img/products/f7.jpg";
import img8 from "../img/products/f8.jpg";
import img9 from "../img/products/n1.jpg";
import img10 from "../img/products/n2.jpg";
import img11 from "../img/products/n3.jpg";
import img12 from "../img/products/n4.jpg";
import img13 from "../img/products/n5.jpg";
import img14 from "../img/products/n6.jpg";
import img15 from "../img/products/n7.jpg";
import img16 from "../img/products/n8.jpg";
export const ShoppingContext = createContext();

export const ContextProvider = ({ children }) => {
    const cartStorage = JSON.parse(localStorage.getItem("cart")) || [];
    const [cart, setCart] = useState(cartStorage);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
      });
    
    const products = [
      {
        id: 0,
        title: "Sea shirt one",
        price: 150,
        img: img1,
        quantity: 1,
        name: 1,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        imgs: [img1, img2, img3, img4],
      },
      {
        id: 1,
        title: "Sea shirt two",
        price: 200,
        img: img2,
        quantity: 1,
        name: 2,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        imgs: [img2, img3, img4, img5],
      },
      {
        id: 2,
        title: "Sea shirt three",
        price: 250,
        img: img3,
        quantity: 1,
        name: 3,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        imgs: [img3, img4, img5, img6],
      },
      {
        id: 3,
        title: "Sea shirt four",
        price: 280,
        img: img4,
        quantity: 1,
        name: 4,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        imgs: [img4, img5, img6, img7],
      },
  
      {
        id: 4,
        title: "Sea shirt five",
        price: 300,
        img: img5,
        quantity: 1,
        name: 5,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        imgs: [img5, img6, img7, img8],
      },
      {
        id: 5,
        title: "Sea shirt six",
        price: 320,
        img: img6,
        quantity: 1,
        name: 6,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        imgs: [img6, img7, img8, img9],
      },
      {
        id: 6,
        title: "trouser",
        price: 350,
        img: img7,
        quantity: 1,
        name: 7,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  
        imgs: [img7, img8, img9, img10],
      },
      {
        id: 7,
        title: "Plouse",
  
        price: 370,
        img: img8,
        quantity: 1,
        name: 8,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        imgs: [img8, img9, img10, img11],
      },
      {
        id: 8,
        title: "Shirt",
        price: 400,
        img: img9,
        quantity: 1,
        name: 9,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        imgs: [img9, img10, img11, img12],
      },
      {
        id: 9,
        title: "Shirt two",
        price: 420,
        img: img10,
        quantity: 1,
        name: 10,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        imgs: [img10, img11, img12, img13],
      },
      {
        id: 10,
        title: "Shirt three",
        price: 350,
        img: img11,
        quantity: 1,
        name: 11,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        imgs: [img11, img12, img13, img14],
      },
      {
        id: 11,
        title: "T-shirt",
        price: 450,
        img: img12,
        quantity: 1,
        name: 12,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        imgs: [img12, img13, img14, img15],
      },
      {
        id: 12,
        title: "Shirt four",
        price: 470,
        img: img13,
        quantity: 1,
        name: 9,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        imgs: [img13, img14, img15, img16],
      },
      {
        id: 13,
        title: "Short",
        price: 480,
        img: img14,
        quantity: 1,
        name: 10,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        imgs: [img14, img15, img16, img1],
      },
      {
        id: 14,
        title: "Jacket",
        price: 500,
        img: img15,
        quantity: 1,
        name: 11,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        imgs: [img15, img16, img1, img2],
      },
      {
        id: 15,
        title: "Shirt five",
        price: 490,
        img: img16,
        quantity: 1,
        name: 12,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        imgs: [img16, img3, img4, img5],
      },
    ];
    const features = [
        {
          id: 4,
          title: "Sea shirt five",
          price: 300,
          img: img5,
          quantity: 1,
          name: 5,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          imgs: [img5, img6, img7, img8],
        },
        {
          id: 5,
          title: "Sea shirt six",
          price: 320,
          img: img6,
          quantity: 1,
          name: 6,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          imgs: [img6, img7, img8, img9],
        },
        {
          id: 6,
          title: "trouser",
          price: 350,
          img: img7,
          quantity: 1,
          name: 7,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    
          imgs: [img7, img8, img9, img10],
        },
        {
          id: 7,
          title: "Plouse",
    
          price: 370,
          img: img8,
          quantity: 1,
          name: 8,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          imgs: [img8, img9, img10, img11],
        },
        {
          id: 8,
          title: "Shirt",
          price: 400,
          img: img9,
          quantity: 1,
          name: 9,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          imgs: [img9, img10, img11, img12],
        },
        {
          id: 9,
          title: "Shirt two",
          price: 420,
          img: img10,
          quantity: 1,
          name: 10,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          imgs: [img10, img11, img12, img13],
        },
        {
          id: 10,
          title: "Shirt three",
          price: 350,
          img: img11,
          quantity: 1,
          name: 11,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          imgs: [img11, img12, img13, img14],
        },
        {
          id: 11,
          title: "T-shirt",
          price: 450,
          img: img12,
          quantity: 1,
          name: 12,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          imgs: [img12, img13, img14, img15],
        },
      ];
      const news = [
        {
          id: 0,
          title: "Sea shirt one",
          price: 150,
          img: img1,
          quantity: 1,
          name: 1,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          imgs: [img1, img2, img3, img4],
        },
        {
          id: 1,
          title: "Sea shirt two",
          price: 200,
          img: img2,
          quantity: 1,
          name: 2,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          imgs: [img2, img3, img4, img5],
        },
        {
          id: 2,
          title: "Sea shirt three",
          price: 250,
          img: img3,
          quantity: 1,
          name: 3,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          imgs: [img3, img4, img5, img6],
        },
        {
          id: 3,
          title: "Sea shirt four",
          price: 280,
          img: img4,
          quantity: 1,
          name: 4,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          imgs: [img4, img5, img6, img7],
        },
    
        {
          id: 4,
          title: "Sea shirt five",
          price: 300,
          img: img5,
          quantity: 1,
          name: 5,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          imgs: [img5, img6, img7, img8],
        },
        {
          id: 5,
          title: "Sea shirt six",
          price: 320,
          img: img6,
          quantity: 1,
          name: 6,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          imgs: [img6, img7, img8, img9],
        },
        {
          id: 6,
          title: "trouser",
          price: 350,
          img: img7,
          quantity: 1,
          name: 7,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    
          imgs: [img7, img8, img9, img10],
        },
        {
          id: 7,
          title: "Plouse",
          price: 370,
          img: img8,
          quantity: 1,
          name: 8,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          imgs: [img8, img9, img10, img11],
        },
      ];
    const addCart = (item) => {
        let productItem = cart.find((product) => product.id === item.id);
        if (productItem) {
          productItem.quantity += 1;
          setCart([...cart]);
          Swal.fire(
            "Product is added successfully!",
            "You clicked the button!",
            "success"
          );
        } else {
          item.quantity = 1;
          setCart([item, ...cart]);
          Swal.fire(
            "Product is added successfully!",
            "You clicked the button!",
            "success"
          );
        }
      };
      const updateCartItem = (item) => {
        let productItem = cart.find((product) => product.id === item.id);
    
        if (productItem) {
          productItem.quantity += 1;
          setCart([...cart]);
          if (productItem.quantity === 0) {
            setCart(cart.filter((product) => product.id !== item.id));
          }
        } else {
          setCart([...cart]);
        }
      };
    
      const decCartItem = (item) => {
        let productItem = cart.find((product) => product.id === item.id);
    
        if (productItem) {
          productItem.quantity -= 1;
          setCart([...cart]);
          if (productItem.quantity === 0) {
            setCart(cart.filter((product) => product.id !== item.id));
          }
        } else {
          setCart([...cart]);
        }
      };
      const delItem = (id) => {
        setCart(cart.filter((product) => product.id !== id));
      };
      const delAll = () => {
        setCart([]);
      };
      const contextValue = {
        cart,
        products,
        addCart,
        decCartItem,
       delAll,delItem,updateCartItem,features,news
     
      };
    return(
        <ShoppingContext.Provider value={contextValue} >
     {children}       
        </ShoppingContext.Provider>

    );
}