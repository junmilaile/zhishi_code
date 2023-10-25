export const loginRule = {
  userRule: [
    {
      required: true,
      message: '账号名不能为空'
    },
    {
      max: 16,
      message: '账号长度不能超过16位'
    },
    {
      min: 4,
      message: '账号长度不能少于4位'
    }
  ],
  passwordRule: [
    {
      required: true,
      message: '密码不能为空'
    },
    {
      max: 16,
      message: '密码长度不能超过16位'
    },
    {
      min: 4,
      message: '密码长度不能少于4位'
    }
  ],
  mobileRule: [
    {
      validator: (rule, val) => {
        const mobile = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/
        switch (true) {
          case !Boolean(val):
            return Promise.reject('手机号不能为空')
          case !mobile.test(val):
            return Promise.reject('手机号格式不正确')
            default: {
              return Promise.resolve()
            }
        }
      }
    }
  ],
  codeRule: [
    {
      required: true,
      message: '验证码不能为空'
    },
    {
      max: 6,
      message: '验证码长度不能超过6位'
    },
    {
      min: 6,
      message: '密码长度不能少于6位'
    }
  ],
  confirmPasswordRule(form) {
    return [
      {
        validator: (rule, val) => {
          switch(true) {
            case !Boolean(val): 
              return Promise.reject('确认密码不能为空');
            case form.getFieldValue('password') !== val:
              return Promise.reject('两次输入的密码不相同')
            default: 
            return Promise.resolve()
          }
        }
      }
    ]
  }
}
