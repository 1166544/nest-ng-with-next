import { Module } from '@nestjs/common';
import { TransportController } from './TransportController';
import { TransportService } from './TransportService';
import { ConfigModule } from '@server/common/config/ConfigModule';

/**
 * 中转模块
 */
@Module({
	imports: [ConfigModule],
	controllers: [TransportController],
	providers: [TransportService]
})
export class TransportModule {
	constructor() {
		// hole
	}
}
