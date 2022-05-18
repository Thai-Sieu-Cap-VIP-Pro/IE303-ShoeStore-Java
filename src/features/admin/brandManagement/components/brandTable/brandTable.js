import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Card, Modal, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormikControl from "../../../../../shareComponent/formikCustom/FormikControl";
import { deleteBrand, getAllBrands } from "../../brandSlice";
import * as Yup from "yup";

const initialValues = {
  name: "",
  stauts: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Bạn cần phải nhập trường này !"),
  stauts: Yup.string().required("Bạn cần phải nhập trường này !"),
});

const BrandTable = () => {
  const dropdownOptions = [
    { key: "1", value: "Hiện" },
    { key: "0", value: "Ẩn" },
  ];

  const dispatch = useDispatch();
  const { listBrands } = useSelector((state) => state.brand);

  console.log(listBrands);
  let stt = 1;

  const handleDeleteBrand = async (id, ten) => {
    if (
      window.confirm("Bạn có chắc chắn muốn xóa nhãn hàng (" + ten + ") không?")
    ) {
      const action = deleteBrand(id);
      await dispatch(action);
      const action1 = getAllBrands();
      await dispatch(action1);
    } else {
      console.log("Không xóa");
    }
  };

  useEffect(() => {
    const action = getAllBrands();
    dispatch(action);
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = async (values) => {
    console.log("Vào hàm submit");
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm mới nhãn hàng</Modal.Title>
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
                    label="Tên nhãn hàng"
                    name="name"
                  />
                  <FormikControl
                    control="select"
                    label="Tình trạng"
                    name="status"
                    options={dropdownOptions}
                  />

                  <Button
                    variant="primary"
                    type="submit"
                    // disabled={formik.isValid}
                  >
                    Lưu thêm mới
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Hủy
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Lưu
          </Button>
        </Modal.Footer>
      </Modal>
      <Card>
        <Card.Header as="h5">Quản lí nhãn hàng</Card.Header>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Tên nhãn hiệu</th>
                <th>Trạng thái</th>

                <th className="text-center">
                  <Button variant="success" onClick={handleShow}>
                    Thêm mới
                  </Button>
                </th>
              </tr>
            </thead>
            <tbody>
              {listBrands.map((brand) => (
                <tr key={brand.category_id}>
                  <td>{stt++}</td>
                  <td>{brand.category_name}</td>
                  <td>{brand.category_status == 1 ? "Ẩn" : "Hiện"}</td>

                  <td class="text-center">
                    <Button variant="primary">Sửa</Button>
                    &emsp;
                    <Button
                      variant="danger"
                      onClick={() =>
                        handleDeleteBrand(
                          brand.category_id,
                          brand.category_name
                        )
                      }
                    >
                      Xóa
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BrandTable;
