/**
 * @license
 * Copyright Paperbits. All Rights Reserved.
 *
 * Use of this source code is governed by a Commercial license that can be found in the LICENSE file and at https://paperbits.io/license/commercial.
 */

import { IWidgetOrder, IWidgetHandler } from "@paperbits/common/editing";
import { InputModel } from ".";

export class InputHandlers implements IWidgetHandler {
    constructor(private readonly input: InputModel) { }

    public async getWidgetOrder(): Promise<IWidgetOrder> {
        const widgetOrder: IWidgetOrder = {
            name: "input",
            displayName: `Input ${this.input.inputType}`,
            iconClass: "paperbits-form",
            requires: ["form"],
            createModel: async () => {
                return this.input;
            }
        };

        return widgetOrder;
    }
}