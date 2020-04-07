import * as fs from 'fs';
import * as path from 'path';

/**
 * 服务基类
 */
export class EngineService {

	constructor() {
		// hole
	}

	/**
	 * 读取文件内容
	 *
	 * @param {string} filePath
	 * @param {string} [fileType='utf8']
	 * @returns
	 * @memberof EngineService
	 */
	public async readFile(filePath: string, fileType: string = 'utf8'): Promise<any> {
		return new Promise((resolve: any, reject: any): any => {
			fs.readFile(filePath, fileType, (err: any, data: any): any => {
				if (err) {
					reject(err);
				}
				resolve(data);
			});
		});
	}

	/**
	 * 读取文件，基础信息，包括状态
	 *
	 * @param {*} filePath
	 * @returns
	 * @memberof MindService
	 */
	public async readFileStat(filePath: string): Promise<any> {
		return new Promise((resolve: any, reject: any): any => {
			fs.stat(filePath, (err: any, stats: any): any => {
				if (err) {
					reject(err);
				}
				resolve(stats);
			});
		});
	}

	/**
	 * 保存文件
	 *
	 * @param {*} file
	 * @param {*} totalPath
	 * @param {*} fileName
	 * @returns
	 * @memberof MindService
	 */
	public async saveFile(file: any, totalPath: string, fileName: string): Promise<any> {
		return new Promise((resolve: any, reject: any): any => {
			// 块方式写入文件
			let uploadUrl: string = totalPath;
			let isSavedSuccess: boolean = false;
			const wstream: any = fs.createWriteStream(path.join(process.cwd(), totalPath, fileName));

			wstream.on('open', (): any => {
				const blockSize: number = 128;
				const nbBlocks: number = Math.ceil(file.length / (blockSize));
				for (let i: number = 0; i < nbBlocks; i += 1) {
					const currentBlock: any = file.slice(
						blockSize * i,
						Math.min(blockSize * (i + 1), file.length)
					);
					wstream.write(currentBlock);
				}

				wstream.end();
			});
			wstream.on('error', (err: any): any => {
				reject(err);
			});
			wstream.on('finish', (): any => {
				isSavedSuccess = true;
				uploadUrl = `${uploadUrl}/${fileName}`;
				resolve({
					success: isSavedSuccess,
					uploadUrl
				});
			});
		});
	}
}
