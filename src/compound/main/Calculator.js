import React,{useState, useEffect} from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";
import '../css/calculator.css';
import { Button, Container, Row, Form } from "react-bootstrap";
import Arrow from './Arrow';

function Calculator() {
  const [currentSum,setCurrentSum]=useState(0);
  const [clear,setClear]=useState(false);
  /** Input */
  const [pvtype,setPvtype]=useState(null);
  const [copperWidth,setCopperWidth]=useState(null);
  const [copperThickness,setCopperThickness]=useState(null);
  const [coatingType,setCoatingType]=useState(null);
  const [coatingThickness,setCoatingThickness]=useState(null);

  /** Output */
  const [modelNumber,setModelNumber]=useState(null);
  const [weight,setWeight]=useState(null);
  const [width,setWidth]=useState(null);
  const [thickness,setThickness]=useState(null);
  const [temperature,setTemperature]=useState(null);

  const coating = [
    {type: '60/40 (Sn/Pb)', temperature: '250-275C', density: 8.926},
    {type: '63/37 (Sn/Pb)', temperature: '240-265C', density: 8.805},
    {type: '62/36/2 (Sn/Pb/Ag)', temperature: '235-260C', density: 8.828},
    {type: '96.5/3.5 (Sn/Ag)', temperature: '280-305C', density: 7.422},
    {type: '48/52 (Sn/In)', temperature: '170-195C', density: 7.310},
    {type: '42/58 (Sn/Bi)', temperature: '180-205C', density: 7.310},
  ];

  useEffect(()=>{
    // document.querySelector('#typename').value="";
    // document.querySelector('#copper-width').value="";
    // document.querySelector('#copper-thickness').value="";
    // document.querySelector('#coating-type').value="";
    // document.querySelector('#coating-thickness').value="";
  },[])
  
  useEffect(()=>{
    if(clear) {
    }
  })

  const [formState, setFormState] = useState(true);
  const formik = useFormik({
    initialValues: {
      typeName: "",
      copperWidth: "",
      copperThickness: "",
      coatingType: "",
      coatingThickness: ""
    },
    validationSchema: Yup.object({
      typeName: Yup.string()
        .required("Required"),
      copperWidth: Yup.number()
        .required("Required"),
      copperThickness: Yup.number()
        .required("Required"),
      coatingType: Yup.string()
        .required("Required"),
      coatingThickness: Yup.number()
        .required("Required").min(12).max(30),
    }),
    onSubmit: (values, { resetForm }) => {
      // alert(JSON.stringify(values, null, 2));
      // setFormState(values);
      let pvtype = values.typeName;
      let copperWidth = values.copperWidth;
      let copperThickness = values.copperThickness;
      let coatingType = values.coatingType;
      let coatingThickness = values.coatingThickness;
      
      /** Output - Set Width */
      let cw = parseFloat(copperWidth).toFixed(2);
      if(pvtype === 1) {
        cw = parseFloat(parseFloat(copperWidth) + parseFloat(2 * (parseFloat(coatingThickness) / 1000))).toFixed(2);
      }
      setWidth(cw);

      /** Output - Set Thickness */
      let ct = "";
      if(copperThickness > 0) {
          ct = parseFloat((parseFloat(copperThickness * 1000) + parseFloat(2 * coatingThickness)) / 1000);
      }
      setThickness(ct);

      /** Output - Soldering Temperature */
      if(coatingType) {
        setTemperature(coating[coatingType].temperature);
      }
      
      /**
       * Set Model Number
       */
      let modelNo = "TPVI";
      let cwidth = parseFloat(copperWidth).toFixed(2);
      let ctype = coating[coatingType].type;
      let cweight = ""
      
      if(pvtype == 1) {
        modelNo = modelNo + "R" + cwidth.toString().slice(-2) + ctype.slice(0, 2);
      } else if(pvtype == 2){
        cwidth = (cwidth * 10).toString();
        if(copperWidth > 0.99){        
          modelNo = modelNo + cwidth.slice(0,2) + ct.toString().slice(-2) + ctype.slice(0, 2);
        }else{
          modelNo = modelNo + cwidth.slice(-2) + ct.toString().slice(-2) + ctype.slice(0, 2);
        }
      }else{
        cwidth = (cwidth * 100).toString();
        modelNo = modelNo + "B" + cwidth.slice(0,2) + ct.toString().slice(-2) + ctype.slice(0, 2);
      }
      setModelNumber(modelNo);      

      /**
       * Set Weight
       */
      if(pvtype == 1) {
        let pi = 3.14;
        let widthpow = Math.pow(cw/2 , 2);
        let mdensity = coating[coatingType].density;
        cweight = parseFloat(pi * widthpow * mdensity).toFixed(3);
      } else {
        cweight = parseFloat(cw * ct * coating[coatingType].density).toFixed(3);
      }
      setWeight(cweight);
      resetForm();
    }
  });
  return (
    <div>
       {/* <div className="calculator">
                <h2>Calculator</h2>
            </div> */}
      <div className="App ">
        <div className="form-bg mb-4">
          <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-container">
                    <h3 className="title">PV Connect</h3>
                    <Container>
                      <Form onSubmit={formik.handleSubmit}>
                      <div className="row mb-3">
                        <div className="col-sm-12">
                          <Form.Group controlId="typeName">
                            <Form.Label>Type</Form.Label>
                            <Form.Select 
                              name="typeName"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.typeName}>
                              <option value="">Select Type</option>
                              <option value="1">M10 (Round)</option>
                              <option value="2">5BB/6BB (Flat)</option>
                              <option value="3">Busbar</option>
                            </Form.Select>
                            <Form.Text className="text-danger">
                              {formik.touched.typeName && formik.errors.typeName ? (
                                <div className="text-danger">{formik.errors.typeName}</div>
                              ) : null}
                            </Form.Text>
                          </Form.Group>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-6">
                          <Form.Group controlId="copperWidth">
                            <Form.Label>Copper Dimension (Width)</Form.Label>
                            <Form.Control
                              name="copperWidth"
                              type="text"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.copperWidth}
                            />
                            <Form.Text className="text-danger">
                              {formik.touched.copperWidth && formik.errors.copperWidth ? (
                                <div className="text-danger">{formik.errors.copperWidth}</div>
                              ) : null}
                            </Form.Text>
                          </Form.Group>
                        </div>
                        <div className="col-sm-6">
                          <Form.Group controlId="copperThickness">
                            <Form.Label>Copper Dimension (Thickness)</Form.Label>
                            <Form.Control
                              name="copperThickness"
                              type="text"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.copperThickness}
                            />
                            <Form.Text className="text-danger">
                              {formik.touched.copperThickness && formik.errors.copperThickness ? (
                                <div className="text-danger">{formik.errors.copperThickness}</div>
                              ) : null}
                            </Form.Text>
                          </Form.Group>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-12">
                          <Form.Group controlId="coatingType">
                            <Form.Label>Coating Type (mm)</Form.Label>
                            <Form.Select 
                              name="coatingType"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.coatingType}>
                              <option value="">Select Type</option>
                              <option value="0">60/40 (Sn/Pb)</option>
                              <option value="1">63/37 (Sn/Pb)</option>
                              <option value="2">62/36/2 (Sn/Pb/Ag)</option>
                              <option value="3">96.5/3.5 (Sn/Ag)</option>
                              <option value="4">48/52 (Sn/In)</option>
                              <option value="5">42/58 (Sn/Bi)</option>
                            </Form.Select>
                            <Form.Text className="text-danger">
                              {formik.touched.coatingType && formik.errors.coatingType ? (
                                <div className="text-danger">{formik.errors.coatingType}</div>
                              ) : null}
                            </Form.Text>
                          </Form.Group>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-12">
                          <Form.Group controlId="coatingThickness">
                            <Form.Label>Coating Thickness</Form.Label>
                            <Form.Control
                              name="coatingThickness"
                              type="text"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.coatingThickness}
                            />
                            <small>(Range Between 12 to 30)</small>
                            <Form.Text className="text-danger">
                              {formik.touched.coatingThickness && formik.errors.coatingThickness ? (
                                <div className="text-danger">{formik.errors.coatingThickness}</div>
                              ) : null}
                            </Form.Text>
                          </Form.Group>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-12">
                          <Button
                            variant="primary"
                            type="submit"
                            onClick={values => setFormState(values)}
                            // disabled={formState}
                          >
                            Calculate
                          </Button>
                        </div>
                      </div>
                      </Form>
                    </Container>
                  </div>
              </div>
              
              <div className="col-sm-6">
                  <div className='out-sec-container '>
                  <h3 className="title">Calculated Result</h3>
                    <div className="row out-sec out-model">
                      <div className="col-sm-6 out-lbl">
                        <label>Model No.</label>
                      </div>
                      <div className="col-sm-6 out-result">
                        <span>{modelNumber}</span>
                      </div>
                    </div>
                    <div className="row out-sec out-weight">
                      <div className="col-sm-6 out-lbl">
                        <label>Weight / Mtr.</label>
                      </div>
                      <div className="col-sm-6 out-result">
                        <span>{weight}</span>
                      </div>
                    </div>
                    <div className="row out-sec out-model">
                      <div className="col-sm-6 out-lbl">
                        <label>Overall Dimensions</label>
                      </div>
                      <div className="col-sm-6 out-result">
                        <div className="row out-dimension">
                          <div className="col-sm-6">
                            <label>Width</label>
                            <div>{width}</div>
                          </div>
                          <div className="col-sm-6">
                            <label>Thickness</label>
                            <div>{thickness}</div>
                          </div>
                        </div>
                        
                        
                      </div>
                    </div>
                    <div className="row out-sec out-model">
                      <div className="col-sm-6 out-lbl">
                        <label>Soldering Temperature</label>
                      </div>
                      <div className="col-sm-6 out-result">
                        <span>{temperature}</span>
                      </div>
                    </div>
                    <small>* All Above data is approximate and needs to be re confirmed as per prevaling conditions.</small>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <Arrow/>
    </div>
  );
  
}

export default Calculator;