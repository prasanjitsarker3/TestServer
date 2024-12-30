import { Request, Response } from "express";
import catchAsync from "../../Utilities/catchAsync";
import { userServices } from "./userServices";
import sendResponse from "../../Utilities/sendResponse";
import httpStatus from "http-status";
import pick from "../../App/Common/Pick";
import { optionsPaginationFields, userFilterableFields } from "./userConstant";

const createAdmin = catchAsync(async (req: Request, res: Response) => {
  const result = await userServices.createAdminIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Admin Create Successfully",
    data: result,
  });
});

const getAllUser = catchAsync(async (req: Request, res: Response) => {
  const filterData = pick(req.query, userFilterableFields);
  const optionsData = pick(req.query, optionsPaginationFields);
  const result = await userServices.getAllUserFromDB(filterData, optionsData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User Fetch Successfully",
    data: result,
  });
});

export const userController = {
  createAdmin,
  getAllUser,
};
