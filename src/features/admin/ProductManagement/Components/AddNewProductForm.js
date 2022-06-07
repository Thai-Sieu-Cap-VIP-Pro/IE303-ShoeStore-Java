import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import FormikControl from "../../../../shareComponent/formikCustom/FormikControl";
import { storage } from "../../../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import * as Yup from "yup";
import {
  fetchAddProduct,
  fetchProductsData,
  fetchUpdateProduct,
  hideAddProductForm,
  selectProducts,
} from "../ProductSlice";

const validationSchema = Yup.object({
  product_name: Yup.string().required("Bạn cần phải nhập tên sản phẩm"),
  product_price: Yup.number().required("Bạn cần phải nhập giá sản phẩm"),
  product_quanity: Yup.number().required("Bạn cần phải nhập số lượng sản phẩm"),
});
function AddNewProductForm({ isSua, productId }) {
  let initialValues = {};
  const { listBrands } = useSelector((state) => state.brand);
  const { isShow } = useSelector((state) => state.products);
  const products = useSelector(selectProducts);
  const pr = products.find((product) => product.product_id === productId);
  if (isSua && pr) {
    initialValues = {
      product_name: pr.product_name,
      product_price: pr.product_price,
      product_brand: pr.product_brand,
      product_quanity: pr.product_quanity,
      product_status: pr.product_status,
    };
  } else {
    initialValues = {
      product_name: "",
      product_price: "",
      product_quanity: "",
    };
  }
  const brandOptions = [];
  listBrands.forEach((brand) => {
    brandOptions.push({ key: brand.category_id, value: brand.category_name });
  });
  const statusOptions = [
    { key: "0", value: "Hiện" },
    { key: "1", value: "Ẩn" }
  ];
  const handleClose = () => {
    dispatch(hideAddProductForm());
  };
  const dispatch = useDispatch();
  const [image, setImage] = React.useState(null);
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const onSubmit = async (values) => {
    if (image !== null) {
      const imageRef = ref(storage, "image" + values.product_name);
      uploadBytes(imageRef, image)
        .then(() => {
          getDownloadURL(imageRef)
            .then(async (url) => {
              values["product_img"] = url;
              // await dispatch(fetchAddProduct(values)).unwrap();
              // dispatch(fetchProductsData());
              if(isSua) {
                values["product_id"] = pr.product_id;
                await dispatch(fetchUpdateProduct(values)).unwrap();
                dispatch(fetchProductsData());
              } else {
                console.log(values)
                dispatch(fetchAddProduct(values))
              }
            })
            .catch((error) => {
              console.log(error.message, "error getting the image url");
            });
          setImage(null);
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      if (isSua) {
        values["product_id"] = pr.product_id;
        values["product_img"] = pr.product_img;
        await dispatch(fetchUpdateProduct(values)).unwrap();
        dispatch(fetchProductsData());
      } else {
        values["product_img"] = "https://www.hannahs.co.nz/generic/images/prod-square-back.jpg?width=800&height=800";
        dispatch(fetchAddProduct(values))
      }
    }
    handleClose();
  };
  return (
    <div>
      <Modal show={isShow} onHide={handleClose}>
        <Modal.Header closeButton>
          {isSua ? (
            <Modal.Title>Sửa sản phẩm</Modal.Title>
          ) : (
            <Modal.Title>Thêm sản phẩm</Modal.Title>
          )}
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => {
              return (
                <Form>
                  <FormikControl
                    control="input"
                    type="text"
                    label="Tên sản phẩm"
                    name="product_name"
                  />
                  <FormikControl
                    control="input"
                    type="text"
                    label="Giá"
                    name="product_price"
                  />
                  <FormikControl
                    control="select"
                    options={brandOptions}
                    label="Thương hiệu"
                    name="product_brand"
                  />
                  <input
                    label="Hình ảnh"
                    type="file"
                    onChange={handleImageChange}
                  />
                  <FormikControl
                    control="input"
                    type="text"
                    label="Số lượng"
                    name="product_quanity"
                  />
                  <FormikControl
                    control="select"
                    options={statusOptions}
                    label="Trạng thái"
                    name="product_status"
                  />
                  {isSua ? (
                    <Button
                      variant="primary"
                      type="submit"
                      disabled={!formik.isValid}
                    >
                      Sửa
                    </Button>
                  ) : (
                    <Button
                      variant="primary"
                      type="submit"
                      disabled={!formik.isValid}
                    >
                      Thêm
                    </Button>
                  )}
                </Form>
              );
            }}
          </Formik>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AddNewProductForm;
