import Constant from '../constant/constant';
import WebReqUrl from '../web-req/web-req';
import apiUrl from '../apicontrollers/apicontrollers';

export default {
    getZone: async function () {
        return await WebReqUrl.get(Constant.apiUrl + apiUrl.userController.getData);
    },
    postZone: async function (data:any) {
        return await WebReqUrl.post(Constant.apiUrl + apiUrl.userController.createData,data);
    },
    deleteZone: async function (id:any) {
        return await WebReqUrl.delete(Constant.apiUrl + apiUrl.userController.deleteData + id);
    },
    getZoneById: async function (id:any) {
        return await WebReqUrl.get(Constant.apiUrl + apiUrl.userController.getDataById + id);
    },
    updateZone: async function (data:any) {
        return await WebReqUrl.put(Constant.apiUrl + apiUrl.userController.updateData,data);
    }
}