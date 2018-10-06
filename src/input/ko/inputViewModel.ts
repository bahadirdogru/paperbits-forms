/**
 * @license
 * Copyright Paperbits. All Rights Reserved.
 *
 * Use of this source code is governed by a Commercial license that can be found in the LICENSE file and at https://paperbits.io/license.
 */

import * as ko from "knockout";
import template from "./input.html";
import { Component } from "@paperbits/core/ko/decorators/component.decorator";
import { InputModel } from "../inputModel";

@Component({
    selector: "paperbits-input",
    template: template
})
export class InputViewModel {
    public inputData: KnockoutObservable<any>;

    constructor(inputModel: InputModel) {
        this.inputData = ko.observable(inputModel);
    }
}