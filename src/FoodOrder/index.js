import React, {useState, useEffect, useRef} from "react";
import FoodComponent from "../Components/FoodComponent";
import { LockClosedIcon } from "@heroicons/react/solid";
import CartItem from "../Components/CartItem";
import "./style.css";
import CategoryComponent from "../Components/CategoryComponent";
import axios from "../axios";
import Modal from "react-modal";
import { Button } from "react-bootstrap";
import {ACT_TYPE} from "../util/constans"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainSideBarComponent from "../Components/MainSideBar/MainSideBar";

const CATEGORY_DATA = [
  {
    id: 1,
    title: "rice",
    icon: process.env.PUBLIC_URL + `/images/pizza.png`,
  },
  {
    id: 2,
    title: "burger",
    icon: process.env.PUBLIC_URL + `/images/burger.png`,
  },
  {
    id: 3,
    title: "pizza",
    icon: process.env.PUBLIC_URL + `/images/rice.png`,
  },
  {
    id: 4,
    title: "hot",
    icon: process.env.PUBLIC_URL + `/images/pizza.png`,
  },
  {
    id: 5,
    title: "devilled",
    icon: process.env.PUBLIC_URL + `/images/rice.png`,
  },
];

function FoodOrder() {
  const picked = false;
  // const [picked, setPicked] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const [foodItems, setFoodItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedElement, setSelectedElement] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [billTotal, setBillTotal] = useState(0.0);
  const [proceedToPay, setProceedToPay] = useState(false);

  const [cartOpen, setCartOpen] = useState(false)
  const cartRef = useRef(null)
  const cartActivateRef = useRef(null)

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      borderRadius: "2rem",
      width: "16vw",
      transform: "translate(-50%, -50%)",
    },
  };
  const notify = () => 
  toast.success('You Order has been placed', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

  const setItemsCart = (element, qty) => {
    let item = {
      element: element,
      qty: qty,
    };

    setCartItems([...cartItems, item]);
    setQuantity(0);
    handleClose();
    setProceedToPay(false);
    setBillTotal(
      billTotal + parseFloat(item.qty) * parseFloat(item.element.price)
    );
    createFoodOrder(item);
  };

  useEffect(() => {
    getSelectedCategory(selectedCategoryId);
    return () => {};
  }, []);
  async function getSelectedCategory(selectedCategoryId) {
    await axios
      .get(`/api/customer/save/FoodMenu/FoodCategory/${selectedCategoryId}`)
      .then((response) => {
        setFoodItems(response.data);
      })
      .catch(function (error) {
        if (error.response) {
          console.error(error.response);
        } else if (error.request) {
          console.log(error.request);
        } else {
            console.log(error);
        }
      });
  }

  async function createFoodOrder(item){
      await axios.post("/api/order/newitem",{
        foodie: item.element.food_id,
        quantity: item.qty,
        cusId : localStorage.getItem("cus_id")
      }).then((response) => {
        console.log(response)
      })
      .catch(function (error) {
        if (error.response) {
          console.error(error.response)
        } else if (error.request) {
          console.log(error.request);
        } else {
            console.log(error);
        }
      });
  }

  async function createOrder(){
    await axios.post("/api/v1/order/neworder",{
      actId: ACT_TYPE.PENDING,
      cusId : localStorage.getItem("cus_id"),
      totalPrice: parseFloat(billTotal*0.9),
      tableNum: 1
    }).then((response) => {
      setTimeout(() => {
        window.location = "/customer-safety"
      }, 3000);

    })
    .catch(function (error) {
      if (error.response) {
        console.error(error.response)
      } else if (error.request) {
        console.log(error.request);
      } else {
          console.log(error);
      }
    });
}

  const Carthandler = () => {

    console.log(cartRef.current);
    cartRef.current.classList.toggle('translate-x-full')
    cartActivateRef.current.querySelector('.cart-icon').classList.toggle('hidden')
    cartActivateRef.current.querySelector('.close-icon').classList.toggle('hidden')

    setCartOpen(!cartOpen)
  }

  return (
    <>
      <div className="w-screen h-screen bg-gray-100 flex relative">
      
        <ToastContainer />
        <MainSideBarComponent type={"Home"} />

        <button ref={cartActivateRef} onClick={Carthandler} className="w-20 h-20 rounded-full bg-pink fixed z-50 top-8 right-6 flex items-center justify-center">
          <svg className="w-10 h-10 cart-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M14.1213 11.2331H16.8891C17.3088 11.2331 17.6386 10.8861 17.6386 10.4677C17.6386 10.0391 17.3088 9.70236 16.8891 9.70236H14.1213C13.7016 9.70236 13.3719 10.0391 13.3719 10.4677C13.3719 10.8861 13.7016 11.2331 14.1213 11.2331ZM20.1766 5.92749C20.7861 5.92749 21.1858 6.1418 21.5855 6.61123C21.9852 7.08067 22.0551 7.7542 21.9652 8.36549L21.0159 15.06C20.8361 16.3469 19.7569 17.2949 18.4879 17.2949H7.58639C6.25742 17.2949 5.15828 16.255 5.04837 14.908L4.12908 3.7834L2.62026 3.51807C2.22057 3.44664 1.94079 3.04864 2.01073 2.64043C2.08068 2.22305 2.47038 1.94649 2.88006 2.00874L5.2632 2.3751C5.60293 2.43735 5.85274 2.72207 5.88272 3.06905L6.07257 5.35499C6.10254 5.68257 6.36234 5.92749 6.68209 5.92749H20.1766ZM7.42631 18.9079C6.58697 18.9079 5.9075 19.6018 5.9075 20.459C5.9075 21.3061 6.58697 22 7.42631 22C8.25567 22 8.93514 21.3061 8.93514 20.459C8.93514 19.6018 8.25567 18.9079 7.42631 18.9079ZM18.6676 18.9079C17.8282 18.9079 17.1487 19.6018 17.1487 20.459C17.1487 21.3061 17.8282 22 18.6676 22C19.4969 22 20.1764 21.3061 20.1764 20.459C20.1764 19.6018 19.4969 18.9079 18.6676 18.9079Z" fill="white"/>
          </svg>
          <svg className="w-10 h-10 close-icon hidden" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M7.66976 1.99915H16.3398C19.7298 1.99915 21.9998 4.37915 21.9998 7.91915V16.0901C21.9998 19.6201 19.7298 21.9991 16.3398 21.9991H7.66976C4.27976 21.9991 1.99976 19.6201 1.99976 16.0901V7.91915C1.99976 4.37915 4.27976 1.99915 7.66976 1.99915ZM15.0098 14.9991C15.3498 14.6601 15.3498 14.1101 15.0098 13.7701L13.2298 11.9901L15.0098 10.2091C15.3498 9.87015 15.3498 9.31015 15.0098 8.97015C14.6698 8.62915 14.1198 8.62915 13.7698 8.97015L11.9998 10.7491L10.2198 8.97015C9.86976 8.62915 9.31976 8.62915 8.97976 8.97015C8.63976 9.31015 8.63976 9.87015 8.97976 10.2091L10.7598 11.9901L8.97976 13.7601C8.63976 14.1101 8.63976 14.6601 8.97976 14.9991C9.14976 15.1691 9.37976 15.2601 9.59976 15.2601C9.82976 15.2601 10.0498 15.1691 10.2198 14.9991L11.9998 13.2301L13.7798 14.9991C13.9498 15.1801 14.1698 15.2601 14.3898 15.2601C14.6198 15.2601 14.8398 15.1691 15.0098 14.9991Z" fill="white"/>
          </svg>

        </button>


        <div className="py-6 px-5 w-3/4 bg-gray-100 absolute top-0 left-36">
          <div className="mb-5">
            <h1 className="text-4xl font-semibold text-gray-500">
              Menu Category
            </h1>
            <div className="flex mt-6">
              {CATEGORY_DATA.map((element) => (
                <button
                  className="btn"
                  onClick={(e) => {
                    setSelectedCategoryId(element.id);
                    getSelectedCategory(element.id);
                  }}
                >
                  <CategoryComponent
                    key={element.id}
                    active={selectedCategoryId === element.id}
                    icon={element.icon}
                    title={element.title}
                  />
                </button>
              ))}
            </div>
            <h1 className="text-4xl font-semibold text-gray-500 mt-4">
              Pick Your Favourite
            </h1>
          </div>
          {foodItems.length > 0 ? (
            <div className="grid grid-cols-4 pb-10 relative">
              <div
                className={`absolute z-30 top-0 right-0 left-0 bottom-0 w-4/5 h-full glass ${
                  picked ? "block" : "hidden"
                }`}
              ></div>
              {foodItems.map((element) => (
                <button
                  className="btn"
                  onClick={() => {
                    handleShow();
                    setSelectedElement(element);
                  }}
                >
                  <FoodComponent
                    key={element.food_id}
                    image={element.image}
                    name={element.name}
                    price={element.price}
                  />
                </button>
              ))}
            </div>
          ) : (
            <div className="flex items-start justify-center bg-gray-300">
              <p className="text-center text-xl bg-gray-300 px-8 py-4 ">
                No Items Available
              </p>
            </div>
          )}
        </div>
        <div className="w-2/5 px-4 py-10 fixed top-0 right-0 bottom-0 bg-white transform translate-x-full transition duration-500" ref={cartRef}>
          <h1 className="text-2xl font-semibold mb-10">Order Menu</h1>
          {cartItems.length === 0 ? (
            <div className="flex items-start justify-center mt-14">
              <p className="text-center text-xl bg-gray-300 px-6 py-3 rounded-full">
                No Items Available
              </p>
            </div>
          ) : (
            <div>
              <div className="cart-property">
                {cartItems.map((item) => {
                  return (
                    <CartItem
                      image={item.element.image}
                      name={item.element.name}
                      quantity={item.qty}
                      price={item.element.price}
                    />
                  );
                })}
              </div>
              <div className="w-11/12 h-1 border-2 border-dashed border-gray-400 mx-auto" />
              {!proceedToPay && (
                <>
                  <div className="px-3 mt-6">
                    <div className="flex text-2xl font-semibold text-gray-600">
                      <p className="flex-1">Sub Total</p>
                      <p>${billTotal}</p>
                    </div>
                    <div className="flex text-2xl font-semibold text-gray-600 mt-2">
                      <p className="flex-1">Discount(10%)</p>
                      <p>${billTotal * 0.1}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
          {!proceedToPay && (
            <div
              className={`${
                cartItems.length === 0 ? "opacity-60" : "opacity-100"
              } order-btn-properties absolute bottom-10 left-1/2 transform -translate-x-1/2 px-10 py-5 bg-pink text-white rounded-full flex items-center justify-center cursor-pointer`}
            >
              <button
                className="btn btn-block text-white"
                onClick={() => {
                  setProceedToPay(true);
                }}
              >
                {cartItems.length === 0 ? (
                  <LockClosedIcon className="w-10 h-10 text-gray-50 block" />
                ) : (
                  <p className="text-3xl font-semibold">
                    Order ${billTotal - billTotal * 0.1}
                  </p>
                )}
              </button>
            </div>
          )}
          {proceedToPay && (
            <>
              <div className="row mt-2 justify-content-around">
                <div className="col-4 payment-method-properties">
                  <img
                    src={process.env.PUBLIC_URL + "/images/card_payment.png"}
                    alt="food"
                  ></img>
                </div>
                <div className="col-4 payment-method-properties">
                  <img
                    src={process.env.PUBLIC_URL + "/images/cash_payment.png"}
                    alt="food"
                  ></img>
                </div>
              </div>
              <div className="row mt-2 justify-content-around">
                <div className="col-4 payment-method-properties">
                  <button className="btn btn-block bg-pink text-white" onClick={() =>{
                      notify();
                      createOrder();
                  }}>Card</button>
                </div>
                <div className="col-4 payment-method-properties">
                  <button className="btn btn-block bg-pink text-white"  onClick={() =>{
                      notify();
                      createOrder();
                  }}>Cash</button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <Modal
        isOpen={showModal}
        onRequestClose={handleClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <FoodComponent
          key={selectedElement.food_id}
          image={selectedElement.image}
          name={selectedElement.name}
          price={selectedElement.price}
        />
        <div className="form-group row">
          <label
            htmlFor="elementName"
            className="col-sm-4 col-form-label font-size-12 align-text-left"
          >
            Quantity
          </label>
          <div className="col-sm-7">
            <input
              className="form-control theam-textbox items-align-left"
              type="number"
              id="elementName"
              onChange={(e) => {
                setQuantity(parseInt(e.target.value));
              }}
            />
          </div>
        </div>

        <Button
          className="bg-pink text-white rounded-full"
          onClick={() => {
            setItemsCart(selectedElement, quantity);
          }}
        >
          Add To Cart
        </Button>
      </Modal>
    </>
  );
}

export default FoodOrder;
