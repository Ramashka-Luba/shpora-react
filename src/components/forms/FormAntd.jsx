import s from "./FormAntd.module.css"
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Row, Col, Rate } from 'antd';

const FormAntd = () => {

    const onFinish = (values) => { //вызывается при нажатии  кунопки у которой стоит submit, данные из формы записываются в values
        console.log('Received values of form: ', values);
    };


    return (
        <Row justify='center'>
            <Col span={6}>
                {/* <div className={s.asd}>khgvjhgcfgfxjgfmnbljhv</div> */}
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ //данные по умолчанию
                        username: "lromashko911@gmail.com",
                        password: 12345,
                        rate: 3

                    }}
                    onFinish={onFinish}
                >


                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="Username"
                        />
                    </Form.Item>


                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                            {
                                max: 7,
                                message: 'не больше 7 символов',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>


                    {/* <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                    Forgot password
                </a>
            </Form.Item> */}

                    <Form.Item  name="rate" label={<p className={s.rate}>Rate</p>} >  
                        <Rate disabled="true" count={10}/>
                    </Form.Item>


                    <Form.Item>
                        {/*если у кнопки есть htmlType="submit", то при нажании на нее автоматически вызовится onFinish
                        и данные введенные в форму запишутся в values*/}  
                        <Button type="primary" htmlType="submit" className="login-form-button"> 
                            Send data
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
};

export default FormAntd;