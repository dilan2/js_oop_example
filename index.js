var data = [
	{
		price: 10,
		owner: 'Owner2',

	},
	{
		price: 1,
		owner: 'Owner4',

	},
	{
		price: 200,
		owner: 'Owner4',

	},
	{
		price: 2,
		owner: 'Owner5',

	},
	{
		price: 300,
		owner: 'Owner5',

	},
	{
		price: 30,
		owner: 'Owner2',

	},
];




function BaseFilter(data) {
	this.data = data;
	this.result = [];
}

BaseFilter.prototype.show = function() {
	console.log(this.result);
}

BaseFilter.prototype.sort_result = function() {
	this.reslult = this.result.sort(function(a,b) {
		if(+a.price < b.price) {
			return -1;
		} else if(+a.price > b.price) {
			return 1;
		} else {
			return 0;
		}
	});
}


function PriceFilter(data) {
	BaseFilter.apply(this, arguments);
	var self = this;
	this.filter = function(min) {
		this.data.forEach(function(item, idx, arr) {
			if(+item.price >= +min) {
				self.result.push(item);
			}
		});
	}
}

PriceFilter.prototype = Object.create(BaseFilter.prototype);
PriceFilter.prototype.constructor = PriceFilter;


function OwnerFilter(data) {
	BaseFilter.apply(this, arguments);
	var self = this;
	this.filter = function(owner) {
		this.data.forEach(function(item, idx, arr) {
			if(item.owner.toLowerCase() == owner.toLowerCase()) {
				self.result.push(item);
			}
		});
	}
}
OwnerFilter.prototype = Object.create(BaseFilter.prototype);
OwnerFilter.prototype.constructor = OwnerFilter;


var price_filter = new PriceFilter(data);
price_filter.filter(30);
price_filter.show();
price_filter.sort_result();
price_filter.show();


var owner_filter = new OwnerFilter(data);
owner_filter.filter('Owner4');
owner_filter.show();
