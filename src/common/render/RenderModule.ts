import { Module } from '@nestjs/common';
import RenderService from './RenderService';

/**
 * render module
 *
 * @class RenderModule
 */
@Module({
	providers: [RenderService]
})
class RenderModule {}

export default RenderModule;
