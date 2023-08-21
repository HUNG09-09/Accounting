const format = {

    /**
     * Hàm định dạng tiền
     * Author:NSHUNG (27/07/2023)
     */
    formatMoney: function(debit) {
        if (debit)
        return debit = new Intl.NumberFormat('vi-VN', {currency: 'VND', style: 'currency'}).format(debit);
        else return "";
    },

     /**
     * Hàm định dạng ngày tháng năm
     * Author:NSHUNG (27/07/2023)
     */
    formatDate: function(date) {
        try {
            if(!date) {
                return "";
            }
            date = new Date(date);
            let dateValue = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            return `${dateValue}/${month}/${year}`;
            // return `${dateValue < 10 ? "0" + dateValue : dateValue}/${month < 10 ? "0" + month : month}/${year}`;
        }
        catch(error) {
            console.log(error);
            return "";
        }
    },

    /**
     * Định dạng giới tính
     * Author:NSHUNG (27/07/2023)
     */
    formatGender(genderValue) {
        // Sử dụng câu lệnh điều kiện gán giá trị 
        if (genderValue == 0) {
            return "Nam";
        } else if (genderValue == 1) {
            return "Nữ";
        } else {
            return "Khác";
        }
    },


    /**
     * Định dạng companyName
     * Author:NSHUNG (27/07/2023)
     */
    formatCompanyName(companyName) {
        if (companyName) {
            return companyName;
        } else return "";
    }

}

export default format;