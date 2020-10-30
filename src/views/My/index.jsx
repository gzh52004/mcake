import React from 'react';
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import {withAuth, withUser} from '../../utils/hoc'

function successToast() {
    Toast.success('Load success !!!', 1);
  }
  function failToast() {
    Toast.fail('Load failed !!!', 1);
  }
// ES7的装饰器写法
@withAuth
class My extends React.Component{
    componentDidMount() {
        Toast.loading('Loading...', 30, () => {
          console.log('Load complete !!!');
        });
    
        setTimeout(() => {
          Toast.hide();
        }, 3000);
      }
    render(){
        return(
            <div>
                My
                <Button onClick={successToast}>success</Button>
                <Button onClick={failToast}>fail</Button>
            </div>
        )
    }
}
export default My;