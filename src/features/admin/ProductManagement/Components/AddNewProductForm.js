import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Modal } from 'react-bootstrap'
import FormikControl from '../../../../shareComponent/formikCustom/FormikControl'
import {storage} from '../../../../firebase'
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import * as Yup from 'yup'
import { fetchAddProduct } from '../ProductSlice'
const initialValues = {
    product_name: "",
    product_price: "",
    product_quantity: "",
    product_status: "",
}
const validationSchema = Yup.object({
    product_name:Yup.string().required('Bạn cần phải nhập tên sản phẩm'),
    product_price:Yup.string().required('Bạn cần phải nhập giá sản phẩm'),
    product_quantity:Yup.string().required('Bạn cần phải nhập số lượng sản phẩm'),
    product_status:Yup.string().required('Bạn cần phải nhập trạng thái sản phẩm')
})
function AddNewProductForm() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [image, setImage] = React.useState(null)
  const dispatch = useDispatch()
  const handleImageChange = (e) => {
    if(e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }
    const onSubmit = async (values) => {
      handleClose();
      if(image !== null) {
        const imageRef = ref(storage, "image")
        uploadBytes(imageRef, image).then(() => {
        getDownloadURL(imageRef).then((url) => {
          values["product_img"] = url
          dispatch(fetchAddProduct(values))
        }).catch(error => {
          console.log(error.message, "error getting the image url")
        })
        setImage(null)
        }).catch(error => {
          console.log(error.message)
        })
      }
      else {
          values["product_img"] = null
          dispatch(fetchAddProduct(values))
      }
    }
  return (
    <div>
      <Button variant="success" onClick={handleShow}>
        Thêm sản phẩm 
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm sản phẩm</Modal.Title>
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
                    label="Tên sản phẩm"
                    name="product_name"
                  />
                  <FormikControl
                    control="input"
                    label="Giá"
                    name="product_price"
                  />
                   {/* <FormikControl
                    control="select"
                    label="Thương hiệu"
                    name="productBrand"
                  /> */}
                  <input label="Hình ảnh" type="file" onChange={handleImageChange}/>
                  <FormikControl
                    control="input"
                    label="Số lượng"
                    name="product_quantity"
                  />
                  <FormikControl
                    control="input"
                    label="Trạng thái"
                    name="product_status"
                  />
                  <Button
                    variant="primary"
                    type="submit"
                    disabled={!formik.isValid}
                  >
                      Thêm
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default AddNewProductForm