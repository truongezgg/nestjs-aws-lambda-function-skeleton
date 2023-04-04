import { bootstrapApiAdmin } from 'apps/api-admin/src';
import { bootstrapApi } from 'apps/api/src';
import { Callback, Context, Handler } from 'aws-lambda';

let serverApi: Handler;
let serverApiAdmin: Handler;

export const handlerApi: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  serverApi = serverApi ?? (await bootstrapApi());
  return serverApi(event, context, callback);
};

export const handlerApiAdmin: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  serverApiAdmin = serverApiAdmin ?? (await bootstrapApiAdmin());
  return serverApiAdmin(event, context, callback);
};
