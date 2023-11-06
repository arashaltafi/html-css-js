const btn = document.querySelector('.btn')
const allTest = document.getElementById('all-test')
const correctTest = document.getElementById('correct-test')
const wrongTest = document.getElementById('wrong-test')
const resultBox = document.querySelector(".box2")

btn.addEventListener('click', () => {
    let all = Number(allTest.value)
    let correct = Number(correctTest.value)
    let wrong = Number(wrongTest.value)

    if (all <= 0) {
        showAlert("لطفا ابتدا تعداد تست ها را وارد نمایید")
    }
    else if (all < wrong) {
        showAlert("تعداد تست های غلط نباید بیشتر از تعداد کل تست ها باشد")
    }
    else if (all < correct) {
        showAlert("تعداد تست های درست نباید بیشتر از تعداد کل تست ها باشد")
    }
    else if (all < (correct + wrong)) {
        showAlert("جمع تعداد تست های درست و غلط نباید بیشتر از تعداد کل تست ها باشد")
    }
    else {
        let correctPercent = (correct * 100) / all
        let wrongPercent = (wrong * 100) / all
        resultBox.style.display = "flex";
        resultBox.innerHTML = `
            درصد تست های درست: ${Math.round(correctPercent).toFixed(2)} 
            ${'<br>'} 
            درصد تست های غلط: ${Math.round(wrongPercent).toFixed(2)}
        `;
    }
})

function showAlert(msg) {
    window.alert(msg)
    resultBox.style.display = "none";
    resultBox.innerHTML = "";
}